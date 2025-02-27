<template>
  <router-view></router-view>
</template>

<script setup>
import axios from 'axios';
import { useMusicDBStores } from './stores/musicDB';
import { useManagement } from './store/Management';
import { storeToRefs } from 'pinia';

const musicDB = useMusicDBStores();
const { MusicType, MusicList } = storeToRefs(musicDB);

const Management = useManagement();
const { ManagementList,ManagementType } = storeToRefs(Management);

// 发送请求
axios.get('/api/MusicDB').then((res) => {
  musicDB.cs = res.data.data.user || [];
  // 音乐类别
  MusicType.value = res.data.data.type || [];
  // 全部音乐
  MusicList.value = res.data.data.song || [];
  // 管理
  ManagementList.value = res.data.data.song || [];
  // 管理类别
  ManagementType.value = MusicType.value;

}) .catch((error) => {
    console.error("请求数据失败:", error);
  });
</script>

<style scoped></style>