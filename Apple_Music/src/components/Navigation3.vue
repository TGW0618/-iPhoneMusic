<template>
    <div class="Navigation">
      <div class="router-link">
        <p style="font-size: 10px;color: #6d6d6d;">播放列表</p>
        <ul>
          <li class="router-link-li" v-for="item in routerTo" :key="item.id">
            <router-link :to="item.toRouter">
              <div>
                <el-row>
                  <!-- <el-col :span="3" style="width: 35px;height: 35px;"></el-col> -->
                  <el-col :span="21">{{ item.navName }}</el-col>
                </el-row>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const routerTo = ref([
    {
      id: 1,
      toRouter: "AllLikeList",
      navName: "所有喜欢列表",
      imgURL: "../assets/NavigationImg/nav-page.png",
    },
    {
      id: "admin",
      toRouter: "FavoriteSong",
      navName: "喜爱的歌曲",
      imgURL: "../assets/NavigationImg/nav-new.png",
    }
  ]);
  </script>
  
  <style lang="scss" scoped>
  .Navigation {
    background-color: #f9f9f9;
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
  
  .router-link {
    margin-top: 30px;
    margin-left: 13%;
    margin-right: 7%;
  }
  .router-link-li {
    height: 35px;
    border-radius: 5px;
    line-height: 35px;
  }
  
  .router-link-li:hover {
    transition: 0.1s ease-in-out;
    // background-color: rgb(111, 84, 136);
    box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.117);
  }
  </style>