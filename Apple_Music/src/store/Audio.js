import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useAudioStore = defineStore("Audio", {
    state: () => {
        return {
            audio: reactive([]),
            imgURL: ref("/public/img/icon/Top music.svg"),
            SongTitle: ref(""),
            ArtistName: ref(""),
            SongURL: ref(""),
            audioRef: ref(""),
            audioList: ref(''),
        };
    },
    getters: {},
    actions: {
        MyMusicAudio(item) {
            // console.log('接收：歌名：' + item.SongTitle + '地址：' + item.SongURL);
            this.imgURL = item.imgURL;
            this.SongTitle = item.SongTitle;
            this.ArtistName = item.ArtistName;
            this.SongURL = item.SongURL;
            this.audioRef.load(); // 强制加载新的音频文件
            this.audioRef.play(); // 播放音频
            this.audio.unshift(item);
            // console.log('已添加：' + this.audio.map(item => item.SongTitle + '--地址：' + item.SongURL));
        },
        audioListAdd(item) {
            
        },
    },
    persist: {
        paths: ["audio"],
        enabled: false,
        strtegies: [{
            key: "audio",
            storage: localStorage,
        }, ],
    },
});