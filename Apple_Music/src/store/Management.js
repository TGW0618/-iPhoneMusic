// 主页数据
import { defineStore } from "pinia";
import { ref } from "vue";

export const useManagement = defineStore("Management", {
  state: () => {
    return {
      ManagementList: [],
      ManagementType: ref(),
      // 查询数据
      SelectDataList: ref(),
    };
  },
  getters: {},
  actions: {},
  persist: {
    paths: ["ManagementList"],
    enabled: true,
    strtegies: [
      {
        key: "ManagementList",
        storage: localStorage,
      },
    ],
  },
});
