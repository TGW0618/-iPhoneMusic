// 主页数据
import { defineStore } from "pinia";
import { ref } from "vue";

export const useHomePageData = defineStore("HomePage", {
  state: () => {
    return {
      // 主页数据
      HomepageData: [],
      // 年代推荐
      ageRecommendation: ref(),
      // 查询数据
      SelectDataList: ref(),
      // 类别数据
      TypeData: ref(),
    };
  },
  getters: {
    getAgeRecommendation() {
      this.ageRecommendation = this.HomepageData;
      if (this.HomepageData.find((item) => item.ReleaseDate)) {
        // 去重
        this.ageRecommendation = this.HomepageData.filter(
          (item) => item.ReleaseDate == "2004"
        );
      } else {
        // alert("没有");
      }
    },
  },
  actions: {
    
  },
  persist: {
    paths: ["HomepageData"],
    enabled: true,
    strtegies: [
      {
        key: "HomepageData",
        storage: localStorage,
      },
    ],
  },
});
