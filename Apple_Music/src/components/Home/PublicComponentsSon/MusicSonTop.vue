<template>
  <div style="background-color: white">
    <!-- 头部开始 -->
    <el-header class="MusicSonTop-header">
      <el-row v-for="item in MusicSonTopList" :key="item.id">
        <el-col :span="7">
          <div style="width: 270px; height: 270px">
            <!-- 图片渲染的 -->
            <div v-show="isTopViewL == 0" class="MusicSonTop-header-img">
              <img
                style="width: 270px; border-radius: 8px"
                :src="item.imgURL"
              />
            </div>
            <!-- 视频渲染的 -->
            <div v-show="isTopViewL == 1">
              <video
                style="height: 270px"
                class="MusicSonTop-header-img"
                autoplay
                loop
                playsinline
                muted
              >
                <source :src="item.VideoURL" type="video/mp4" />
              </video>
            </div>
          </div>
        </el-col>
        <!-- 简短内容渲染的 -->
        <el-col v-show="isTopViewR == 0" :span="17">
          <el-row>
            <el-col style="padding-top: 95px">
              <!-- 歌名 -->
              <p
                style="font-size: 20px; font-weight: bold; padding-bottom: 8px"
              >
                {{ item.SongTitle }}
              </p>
              <p style="color: #707070; font-size: 10px; padding-bottom: 8px">
                {{ item.SongTitle }} - Singel . {{ item.ArtistName }} .
                {{ item.ReleaseDate }}
              </p>
            </el-col>
          </el-row>
          <!-- 按钮 -->
          <el-row>
            <el-col :span="18">
              <div v-if="!isAuthenticated">
                <el-button @click="MyMusic(item)" class="playButton1"
                  >试听</el-button
                >
              </div>
              <div v-else>
                <el-button class="playButton1" @click="MyMusic(item)">播放</el-button>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <!-- 长内容渲染的 -->
        <el-col v-show="isTopViewR == 1" :span="17">
          <el-row class="MusicSonTop-header-right-row-1">
            <el-col>
              <p class="MusicSonTop-header-right-row-1-p1">
                {{ item.SongTitle }}
              </p>
              <!-- 歌手名 -->
              <p class="MusicSonTop-header-right-row-1-p2">
                {{ item.ArtistName }}
              </p>
              <!-- 类型和出版时间 -->
              <p class="MusicSonTop-header-right-row-1-p3">
                {{ item.AlbumType }}·{{ item.ReleaseDate }}
              </p>
            </el-col>
          </el-row>
          <el-row class="MusicSonTop-header-right-row-2">
            <el-col :span="14">
              <!-- 内容介绍 -->
              <p>
                {{ item.Description }}
              </p>
            </el-col>
            <el-col> </el-col>
          </el-row>
          <!-- 播放 -->
          <el-row class="MusicSonTop-header-right-row-3">
            <el-col :span="18">
              <div v-if="!isAuthenticated">
                <el-button class="playButton2" @click="playAudition()">试听</el-button>
              </div>
              <div v-else>
                <el-button class="playButton2" @click="MyMusic(item)"> 播放</el-button>
                <el-button class="playButton2" @click="playAudition()" >随机播放</el-button>
              </div>
            </el-col>
                          <!-- 添加 -->
            <el-col :span="6">
              <div v-if="!isAuthenticated" style="padding-left: 135px">
                <el-button class="playButtonAdd"
                  ><span style="margin-top: -6px">…</span></el-button
                >
              </div>

              <div v-else style="padding-left: 29px;"> 
                <el-button
                  style="
                    background-color: #f2f2f2;
                    color: #d50017;
                    width: 90px;
                    border: none;
                    border-radius: 30px;
                    height: 30px;
                    font-weight: bold;
                    font-size: 13px;
                    line-height: 30px;
                  "
                  >添加</el-button
                >
                <el-button class="playButtonAdd"
                  ><span style="margin-top: -6px">…</span></el-button
                >
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
    <!-- 头部结束 -->
  </div>
  <div>

  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useTwoViewStore } from "../../../store/TwoView";
import { useAuthStore } from "../../../store/auth";
import { useAudioStore } from "../../../store/Audio";
import { storeToRefs } from "pinia";

const TwoView = useTwoViewStore();
const { isTopViewL,isTopViewR } = storeToRefs(TwoView);

const auth = useAuthStore();
const { isAuthenticated } = storeToRefs(auth);

const Audio = useAudioStore();

const props = defineProps({
  MusicSonTopData: Object,
});




const MusicSonTopList = reactive([props.MusicSonTopData]);


// 试听 播放
const MyMusic = (item) => {
  Audio.MyMusicAudio(item);
};



// 随机播放
const playRandom = ref(null); 
const playAudition = () => {
  playRandom.value = Math.round(MusicSonTopList.at(0).Song.length - Math.random() * (MusicSonTopList.at(0).Song.length-1))-1;
  // console.log( playRandom.value);
  console.log(MusicSonTopList.at(0).Song.at( playRandom.value ));
  Audio.MyMusicAudio(MusicSonTopList.at(0).Song.at( playRandom.value ));
  
  
};
</script>

<style lang="scss" scoped>
.MusicSonTop-header {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}

.MusicSonTop-header-img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  box-shadow: 5px 5px 10px 0px #013c5a1a;
}

.MusicSonTop-header-right-row-1 {
  height: 50%;
  padding-top: 45px;
}
.MusicSonTop-header-right-row-1-p1 {
  color: black;
  font-weight: bold;
  font-size: 25px;
}
.MusicSonTop-header-right-row-1-p2 {
  color: #d60017;
  font-size: 24px;
}
.MusicSonTop-header-right-row-1-p3 {
  color: rgba(0, 0, 0, 0.658);
  font-weight: bold;
  font-size: 12px;
  padding-top: 5px;
}
.MusicSonTop-header-right-row-2 {
  height: 38%;
}
.MusicSonTop-header-right-row-2 p {
  font-size: 12px;
  padding-top: 20px;
  color: rgba(0, 0, 0, 0.626);
}
.MusicSonTop-header-right-row-3 {
  margin-top: 3px;
}

.playButton1 {
  background-color: #f2f2f2;
  border: none;
  width: 120px;
  color: #d60017;
  font-weight: bold;
}
.playButton2 {
  background-color: #d50017;
  color: white;
  width: 120px;
  border: none;
  border-radius: 6px;
  height: 30px;
  font-weight: bold;
}
.playButtonAdd {
  background-color: #f2f2f2;
  color: #d50017;
  width: 30px;
  border: none;
  border-radius: 30px;
  height: 30px;
  font-weight: bold;
}
</style>