<template>
  <div>
    <!-- 头部组件 -->
    <div>
      <MusicSonTop :MusicSonTopData="TwoViewData" />
    </div>
    <!-- 歌曲列表 -->
    <div style="margin-top: 60px">
      <MusicSongList :MusicSonTopData="TwoViewSongList" />
    </div>

    <!-- 相关推荐 -->
    <div>
      <h4 class="Style-radio-station-h4">
        更多{{ TwoViewData.ArtistName }}的作品
        <img style="width: 1%" src="/public/homepage-img/right.svg" alt="" />
      </h4>
      <MusicBoxListOne :MusicBoxListOneData="TwoViewBoxOne"></MusicBoxListOne>
      <!-- <div>
        TwoViewBoxOne:{{ TwoViewBoxOne }}
      </div> -->
    </div>
  </div>
</template>

<script setup>
import MusicSonTop from "./MusicSonTop.vue";
import MusicSongList from "./MusicSonList.vue";
import { reactive, ref } from "vue";
import { useTwoViewStore } from "../../../store/TwoView";
import { useNewFinedStore } from "../../../store/MusicDB";
import { useHomePageData } from "../../../store/Homepage";
import { storeToRefs } from "pinia";

const TwoView = useTwoViewStore();
const { TwoViewData } = storeToRefs(TwoView);
// console.log(TwoViewData.value);



const NewFinedDB = useNewFinedStore();
const { NewFinedData } = storeToRefs(NewFinedDB);
const HomePage = useHomePageData();
const { HomepageData } = storeToRefs(HomePage);

const TwoViewBoxOne = ref(null);
const TwoViewSongList = ref(null);
if (NewFinedData.value != null) {
  TwoViewBoxOne.value = NewFinedData.value.MusicNewSongData.filter(item => item.ArtistName == TwoViewData.value.ArtistName)
  .concat(NewFinedData.value.MusicPopularData.filter(item => item.ArtistName == TwoViewData.value.ArtistName))
  // console.log(NewFinedData.value.MusicPopularData);
  TwoViewSongList.value =  HomepageData.value.filter(item => item.ArtistName == TwoViewData.value.ArtistName)
  
} else {
  console.log("数据为空");
  
}


</script>

<style lang="scss" scoped>

.Style-radio-station-h4 {
  padding-top: 20px;
  padding-bottom: 13px;
}
</style>