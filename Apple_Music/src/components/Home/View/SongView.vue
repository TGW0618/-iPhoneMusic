<template>
  <!-- 内容 -->
  <div style="width: 100%; height: 40px; text-align: center;font-weight: bold;">歌曲</div>
  <div>
    <div>
      <div>
        <el-row style="font-size: 12px; border-bottom: solid #d9d9d9 1px">
          <el-col :span="6">
            <p>名称</p>
          </el-col>
          <el-col :span="6">
            <p style="margin-left: 75px">
              <span style="color: #d9d9d9">|</span> 艺人
            </p>
          </el-col>
          <el-col :span="6">
            <p style="margin-left: 115px">
              <span style="color: #d9d9d9">|</span> 专辑
            </p>
          </el-col>
          <el-col :span="6">
            <p style="margin-left: 155px">
              <span style="color: #d9d9d9">|</span> 时长
            </p>
          </el-col>
        </el-row>
      </div>
      <MusicSonListAllImg :MusicSonTopData="RecentlyAddedData"></MusicSonListAllImg>

    </div>
  </div>
</template>

<script setup>
import MusicSonListAllImg from "../PublicComponentsSon/MusicSonListAllImg.vue";
import { useRecentlyAdded } from "../../../store/RecentlyAdded";
import { storeToRefs } from "pinia";

const RecentlyAdded = useRecentlyAdded();
const { RecentlyAddedData } = storeToRefs(RecentlyAdded);


</script>

<style lang="scss" scoped></style>
