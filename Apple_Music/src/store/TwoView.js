import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useTwoViewStore = defineStore('TwoView',{
  state:()=>({
    TwoViewData:reactive([]),
    TwoViewSong:reactive([]),
    // 0为图片 1为视频
    isTopViewL:ref(0),
    // 0为简短内容 1为长内容
    isTopViewR:ref(0),
  }),
  actions:{

  }
})