<template>
    <div>
        <el-row>
            <el-col :span="8">
                <form @click="toSelectView" @submit.prevent="onSelect">
                    <el-input v-model.trim="inputSelect" placeholder="搜索" clearable style="width: 100%;">
                    </el-input>
                </form>
            </el-col>

            <el-col :span="8">
                <div>

                </div>
            </el-col>
            <el-col :span="8">
                <div>
                    <el-dropdown split-button type="primary">
                        选择内容
                        <template #dropdown>
                            <el-dropdown-menu>
                                <el-dropdown-item>歌曲</el-dropdown-item>
                                <el-dropdown-item>歌手</el-dropdown-item>

                                <el-dropdown-item>类别</el-dropdown-item> 
                                <el-dropdown-item>专辑</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                    </el-dropdown>
                </div>
            </el-col>
        </el-row>
        <div>
            <el-row style="font-size: 12px; border-bottom: solid #d9d9d9 1px">
                <el-col :span="4">
                    <p>图片</p>
                </el-col>
                <el-col :span="4">
                    <p>歌名</p>
                </el-col>
                <el-col :span="4">
                    <p>
                        艺人
                    </p>
                </el-col>
                <el-col :span="4">
                    <p>
                        专辑
                    </p>
                </el-col>
                <el-col :span="4">
                    <p>
                        时长
                    </p>
                </el-col>
                <el-col :span="4">
                    <p>
                        操作
                    </p>
                </el-col>
            </el-row>
        </div>
    </div>

    <div>
        <div>
            <ManagementSelectList :MusicSonTopData="ManagementList"></ManagementSelectList>
        </div>
    </div>
</template>

<script setup>
import ManagementSelectList from './ManagementSelectList.vue';
import { ref, watch } from "vue";
import { useManagement } from "../../../store/Management";

import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";
const Management = useManagement();
const { ManagementList, SelectDataList } = storeToRefs(Management);



const inputSelect = ref(null);
const selectData = ref(null);
const onSelect = () => {
    if (inputSelect.value != null) {
        console.log(inputSelect.value);
        const selectHomepageData = ManagementList.value.filter(item => item.SongTitle.includes(inputSelect.value) || item.ArtistName.includes(inputSelect.value) || item.AlbumName.includes(inputSelect.value))
        if (selectHomepageData.length > 0) {
            selectData.value = selectHomepageData
            ManagementList.value = selectHomepageData
        } else {
            ElMessage({
                message: "没有该歌曲！",
                type: "warning",
            });
        }


    } else {
        console.log("null");
    }
};

watch(onSelect, (inputSelect, SelectDataList) => {
    console.log('新:' + inputSelect.value);
    console.log("旧:" + SelectDataList.value);
})

</script>

<style lang="scss" scoped></style>