<template>
    <div >
        <el-row style="gap: 20px;">
            <div  @click="playSonAudio(item)"  class="type-loc1" v-for="item in MusicBoxListData" :key="item.id">
                <el-row>           
                    <el-col :span="8">
                        <div>
                            <img class="type-img1" :src=item.imgURL alt="">
                        </div>
                    </el-col>
                    <el-col :span="16">
                        <div style="
                        line-height: 25px;
                        font-size: 13px;
                        margin-top: 20px;
                        margin-left: 10px;
                        ">
                            <p style="">{{item.SongTitle}} - {{ item.ArtistName }}</p>
                            <p style="color: #656565;">专辑 - {{item.AlbumName}}</p>
                        </div>

                    </el-col>
                </el-row>
            </div>
        </el-row>
    </div>
</template>

<script setup>
import { useAudioStore } from "../../../store/Audio";
const Audio = useAudioStore();

const props = defineProps({
    MusicBoxListData: Array,
});

const playSonAudio = (item) => {
  Audio.MyMusicAudio(item);
};

</script>

<style lang="scss">
.type-loc1 {
    background-color: #97979734;
    border-radius: 8px;
    width: 249px;
    height: 90px;
    box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.121);
    cursor: pointer;

}



.type-img1 {
    width: 80%;
    height: 80%;
    background-color: cadetblue;
    border-radius: 8px;
    margin-top: 12px;
    margin-left: 12px;
}

.type-name {
    padding: 0px 0px 5px 10px;
    font-size: 25px;
    font-weight: bold;
    color: white;
}
</style>