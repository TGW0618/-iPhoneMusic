// 音乐数据
import { defineStore } from "pinia";
import { ref } from "vue";


export const useMusicDBStores = defineStore("musicDB", {
  state: () => {
    return {
        // 音乐类别
        MusicType:ref(null),
        // 全部音乐
        MusicList:ref(null),
        // 测试
        cs:[],
        

    };
  },
  getters: {
    //get最新歌曲
    getNewMusicList(state) {
        if (state.MusicList !== null) {
            return state.MusicList.slice(-20);
        }
        
      },
  },
  actions: {

  },
  

});
