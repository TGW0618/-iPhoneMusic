<template>
  <div>
    <!-- 没登录显示的内容开始 -->
    <div v-if="!isAuthenticated">
      <!-- 内容开始 -->
      <div
        style="
          text-align: center;
          color: #000000;
          font-weight: bold;
          width: 100%;
        "
      >
        <div style="font-size: 25px">
          <img src="/public//img//icon/A Music.svg" alt="" />
        </div>
        <div style="font-size: 60px">随 时 发 现 新 音 乐</div>
        <div style="font-size: 380px">
          <img src="/public//img//bgimg/Apple-Music-Note_500.webp" alt="" />
        </div>
        <div style="font-size: 20px; padding-bottom: 30px">
          获取根据你正在听的艺人和音乐类型所挑选的歌单和专<br />
          &nbsp;辑。
        </div>
        <div style="font-size: 18px; padding-bottom: 20px">
          <el-button style="width: 150px">开始</el-button>
        </div>
        <div style="font-size: 13px">进一步了解></div>
      </div>
      <!-- 内容结束 -->
    </div>
    <!-- 没登录显示的内容结束 -->
    <!-- 登录后显示的内容开始 -->
    <div v-else>
      <!-- 头部开始 -->
      <div>
        <p style="font-size: 38px; font-weight: bold">主页</p>
        <el-divider border-style="double" style="margin-top: 8px" />
      </div>
      <!-- 头部结束 -->
       <!-- 2000年代 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          {{infoAgeRecommendation}}年代
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOne :MusicBoxListOneData=ageRecommendation></MusicBoxListOne>
      </div>
    </div>
    <!-- 登录后显示的内容结束 -->
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
import { useAuthStore } from "../../../store/auth";
import { useHomePageData } from "../../../store/Homepage";
import { storeToRefs } from "pinia";


const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const HomePage = useHomePageData();
const { HomepageData,ageRecommendation,TypeData } = storeToRefs(HomePage);

const MusicDB = ref()

axios.get('/src/data/MusicDB.json').then((res) => {
  MusicDB.value = res.data
  HomepageData.value = MusicDB.value.song
  TypeData.value = MusicDB.value.type
})

// 年代推荐
const infoAgeRecommendation =ref('2004')

</script>

<style lang="scss" scoped>
.p1 {
  font-size: 38px;
  font-weight: bold;
}
.Style-radio-station-h4 {
  padding-top: 20px;
  padding-bottom: 13px;
}
</style>