<template>
  <div style="height: auto">
    <!-- 头部开始 -->
    <div>
      <p class="p1">新发现</p>
      <el-divider border-style="double" style="margin-top: 8px" />
    </div>
    <!-- 头部结束 -->
    <div style="height: auto">
      <!-- 轮播图 -->
      <div>
        <MusicCarousel :MusicCarouselDataS="NewFinedData.MusicCarouselData" />
        <div>&nbsp;</div>
      </div>
      <!-- 最新歌曲 -->
      <div>
        <h4 class="Style-radio-station-h4-new">
          最新歌曲
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicSongList :MusicDBlistProps="musicDB.getNewMusicList" />
      </div>
      <!-- 最新发行 -->
      <div>
        <h4 class="Style-radio-station-h4">
          最新发行
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListTwoBox
          :MusicBoxListOneData="NewFinedData.MusicNewReleaseData"
        ></MusicBoxListTwoBox>
      </div>
      <!-- 最近更新 -->
      <div>
        <h4 class="Style-radio-station-h4">
          最近更新
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListTwoBox
          :MusicBoxListOneData="NewFinedData.MusicRecentUpdateData"
        ></MusicBoxListTwoBox>
      </div>
      <!-- 节日电影 -->
      <div>
        <h4 class="Style-radio-station-h4">
          节日电影
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOne
          :MusicBoxListOneData="NewFinedData.MusicFestivalData"
        ></MusicBoxListOne>
      </div>
      <!-- 正在流行中 -->
      <div>
        <h4 class="Style-radio-station-h4-new">
          正在流行中
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicSongList :MusicDBlistProps="NewFinedData.MusicPopularData" />
      </div>
    </div>
  </div>
</template>

<script setup>
import MusicBoxListTwoBox from "../PublicComponents/MusicBoxListTwoBox.vue";

// 页面数据开始
import { useNewFinedStore } from "../../../store/MusicDB";
import { useMusicDBStores }  from '../../../stores/musicDB';//正式的数据库
import { storeToRefs } from "pinia";

const NewFinedDB = useNewFinedStore();
const { NewFinedData } = storeToRefs(NewFinedDB);

const musicDB = useMusicDBStores(); //正式的数据库
// 页面数据结束
</script>

<style scoped>
.p1 {
  font-size: 38px;
  font-weight: bold;
}

.HomepageView-h4 {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: white;
}

.HomepageView-img {
  width: 1%;
}
.Style-radio-station-h4-new {
  margin-bottom: -16px;
}
.Style-radio-station-h4 {
  padding-top: 20px;
  padding-bottom: 15px;
}
</style>
