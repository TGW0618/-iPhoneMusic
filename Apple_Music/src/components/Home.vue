<!-- 布局视图 -->
<template>
    <div class="common-layout">
        <el-container>
            <!-- 左边开始 -->
            <el-aside width="20%"  style="border-right:2px solid #e1e3e1 ;">
                <div class="home-left">
                    <div>
                        <div class="logo">
                            <img src="/public/img/icon/A Music.svg" alt="" />
                        </div>
                        <div class="Search">
                            <Search></Search>
                        </div>
                    </div>
                    <div v-if="!isAuthenticated">
                        <Navigation />
                    </div>
                    <div v-else>
                        <Navigation />
                        <Navigation2 />
                        <Navigation3 />
                    </div>
                    <div v-if="UserPermission == 1">
                        <NavManagement />
                    </div>
                </div>
            </el-aside>
            <!-- 左边结束 -->

            <!-- 右边开始 -->
            <el-container>
                <!-- 右边头部开始 -->
                <el-header class="header">
                    <div>
                        <PlayTop ref="Login " />
                    </div>
                </el-header>
                <!-- 右边头部结束 -->
                <!-- 右边内容开始 -->
                <el-main style="height: auto;width: 100%;background-color: white;">
                    <el-scrollbar height="100vh">
                        <div style="padding-bottom: 10%;">
                            <router-view></router-view>
                            <div style="line-height: 25px;font-size: 10px;margin-top: 50px;background-color: #fbfbfb;">
                                <p style="color: #707070;">Copyright @ 2024 <span
                                        style="color: black;cursor: pointer">Apple Inc.</span> 保留所有权利。</p>

                                <p style="cursor: pointer">互联网服务条款 | Apple Music 与隐私 | Cookie 警告 | 支持 | 反馈</p>
                            </div>
                        </div>
                    </el-scrollbar>
                </el-main>

                <!-- 右边内容结束 -->
            </el-container>
        </el-container>
        <!-- 右边结束 -->
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Search from "./Search.vue";
import Navigation from './Navigation.vue';
import Navigation2 from './Navigation2.vue';
import Navigation3 from './Navigation3.vue';
import NavManagement from './NavManagement.vue';
import PlayTop from './PlayTop.vue';
import axios from 'axios';
import { useHomePageData } from "../store/Homepage";
import { useAuthStore } from '../store/auth';
import { storeToRefs } from 'pinia';

const authStore = useAuthStore();
const { UserPermission, isAuthenticated } = storeToRefs(authStore);

const HomePage = useHomePageData();
const { HomepageData, TypeData } = storeToRefs(HomePage);

const MusicDB = ref(null)
axios.get('/src/data/MusicDB.json').then((res) => {
    MusicDB.value = res.data
    HomepageData.value = MusicDB.value.song
    TypeData.value = MusicDB.value.type
})

</script>

<style lang="scss" scoped>
.common-layout {
    position: fixed;
    width: 100%;
    height: auto;
    
}

.header {
    background-color: #f1f3f4;
}

.logo {
    padding-top: 30px;
    margin-bottom: 20px;
    margin-left: 13%;
}

.Search {
    width: 80%;
    margin-left: 13%;
}
</style>