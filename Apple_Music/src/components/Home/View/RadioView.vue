<template>
  <div>
    <div>
      <p style="font-size: 38px; font-weight: bold">广播</p>
      <el-divider border-style="double" style="margin-top: 8px" />
    </div>
    <!-- 没登录显示的 -->
    <div  v-if="!isAuthenticated">
      <!-- 轮播图 -->
      <div>
        <MusicCarousel :MusicCarouselDataS="RadioDataList"></MusicCarousel>
      </div>

      <!-- 风格电台 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          风格电台
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOne
          :MusicBoxListOneData="StyleRadioBoxList1"
        ></MusicBoxListOne>
      </div>
      <!-- 风格电台 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          风格电台
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOne
          :MusicBoxListOneData="StyleRadioBoxList2"
        ></MusicBoxListOne>
      </div>
    </div>

    <!-- 登录后显示的 -->
    <div v-else>
      <!-- 轮播图 -->
      <div>轮播图</div>
      <!-- 最近播放 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          最近播放
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOne
          :MusicBoxListOneData="RecentlyPlayedList"
        ></MusicBoxListOne>
      </div>
      <!-- 新近内容 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          新近内容
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListTwoC :MusicDBlistProps="NewContentDataList" />
      </div>
      <!-- 电台主持人 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          Apple Music 电台主持人
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOneLongRe :MusicBoxListOneData="RadioHostList" />
      </div>

      <!-- 艺人主持节目 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          艺人主持节目
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOneLongRe :MusicBoxListOneData="ArtistsHostProList" />
      </div>
      <!-- 风格电台 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          风格电台
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicBoxListOne
          :MusicBoxListOneData="StyleRadioBoxList1"
        ></MusicBoxListOne>
      </div>
      <!-- 探索更多精彩内容 -->
      <div class="radio">
        <h4 class="Style-radio-station-h4">
          探索更多精彩内容
          <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
        </h4>
        <MusicExplore :ExploreData="ExploreDataList" />
      </div>
    </div>

    <div>
    </div>
  </div>
</template>

<script setup>
import MusicBoxListTwoC from "../PublicComponents/MusicBoxListTwoC.vue";
import { useRadioData } from "../../../store/Radio";
import { useAuthStore } from "../../../store/auth";
import { storeToRefs } from "pinia";

const RadioData = useRadioData();
const {
  RadioDataList,
  StyleRadioBoxList1,
  StyleRadioBoxList2,
  RadioHostList,
  ArtistsHostProList,
  RecentlyPlayedList,
  ExploreDataList,NewContentDataList
} = storeToRefs(RadioData);

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);




</script>

<style scoped>
.radio {
  padding-bottom: 18px;
}
.Style-radio-station-h4 {
  padding-top: 20px;
  padding-bottom: 13px;
}
</style>
