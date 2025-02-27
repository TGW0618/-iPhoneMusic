<template>
    <div style="background-color: white">
        <el-container>
            <!-- 内容开始 -->
            <el-main style="margin: 0px; padding: 0px">
                <div style="width: 100%" v-for="(item, index) in MusicSonTopData" :key="item.date">
                    <el-row   @click="playSonAudio(item)" class="Row" :class="rowClass(index)">
                        <el-col :span="1" style="text-align: center;">
                            <p>{{ index + 1 }}</p>
                        </el-col>
                        <el-col :span="21">
                            <p>{{ item.SongTitle }}</p>
                        </el-col>
                        <el-col :span="1">
                            <!-- 歌曲时长 -->
                            <p>{{ item.Duration }}</p>
                        </el-col>
                        <el-col :span="1">
                            <p style="color: #d50017;font-weight: bold;margin-top: -4px;">…</p>
                        </el-col>
                    </el-row>
                </div>
            </el-main>
            <!-- 内容结束 -->
        </el-container>
    </div>
</template>

<script setup>
import { useAudioStore } from "../../../store/Audio";
const Audio = useAudioStore();

const props = defineProps({
  MusicSonTopData: Object,
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
    height: 45px;
    font-size: 13px;
    line-height: 45px;
    border-radius: 5px;

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
