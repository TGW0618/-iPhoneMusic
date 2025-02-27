<template>
  <div>
    <h4 style="padding-top: 20px; padding-bottom: 15px" >最近搜索</h4>
    <div>
      <SelectBox :MusicBoxListData="SelectDataList"></SelectBox>
    </div>
    <div>
      <h4 style="padding-top: 20px; padding-bottom: 15px">类别浏览</h4>
      <MusicType :MusicBoxListData="musicDB.MusicType"></MusicType>
    </div>
  </div>
</template>

<script setup>
import SelectBox from "../PublicComponents/SelectBox.vue";
import { ref } from "vue";
import MusicType from "../PublicComponents/MusicType.vue";
import { useHomePageData } from "../../../store/Homepage";
import { useMusicDBStores }  from '../../../stores/musicDB';
import { storeToRefs } from "pinia";
const HomePage = useHomePageData();
const { SelectDataList } = storeToRefs(HomePage);

const musicDB = useMusicDBStores();




</script>

<style lang="scss" scoped></style>