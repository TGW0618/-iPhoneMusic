<template>
    <div style="background-color: white">

            <!-- 内容开始 -->


                <div style="width: 100%" v-for="(item, index) in MusicSonTopData " :key="item.date">
                    <el-row  class="Row" :class="rowClass(index)">
                        <!-- 图片 -->
                        <el-col :span="1" style="text-align: center;">
                             <img style="width: 40px;height:40px;padding-top: 5px;padding-bottom: 5px;" alt=""  @click="playSonAudio(item)"  :src=item.imgURL>
                        </el-col>
                        <!-- 歌名 -->
                        <el-col :span="7" style="padding-left: 8px;">
                            <p>{{ item.SongTitle }}</p>
                        </el-col>
                        <!-- 歌手 -->
                        <el-col :span="7">
                            <p>{{ item.ArtistName}}</p>
                        </el-col>
                        <!-- 专辑名 -->
                        <el-col :span="7">
                            <p>{{ item.AlbumName }}</p>
                        </el-col>
                        <el-col :span="2">
                            <!-- 歌曲时长 -->
                            <p>{{ item.Duration }}</p>
                        </el-col>
                    </el-row>
                </div>

            <!-- 内容结束 -->

    </div>

</template>

<script setup>
import { useAudioStore } from "../../../store/Audio";
const Audio = useAudioStore();

const props = defineProps({
  MusicSonTopData:Array,
});



const rowClass =(index) =>{
    if(index % 2 == 0){
        return "Row1"
    }else{
        return "Row2"
    }
}


const playSonAudio = (item) => {
  Audio.MyMusicAudio(item);
};

</script>

<style lang="scss" scoped>
.Row {
    height: 50px;
    font-size: 13px;
    line-height: 50px;
    border-radius: 5px;
    padding: 0px;
}
.Row1{
    background-color: #fbfbfb;
}
.Row2{
    background-color: #ffffff;
}
.Row:hover{
    background-color: #f0f0f0;
}
.Row:visited{
    background-color: #d60017;
}
</style>
