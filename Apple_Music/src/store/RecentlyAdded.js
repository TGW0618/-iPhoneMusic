import { defineStore } from "pinia";
import { ElMessage } from "element-plus";
export const useRecentlyAdded = defineStore("RecentlyAdded", {
    state: () => {
        return {
            RecentlyAddedData: [],
        };
    },
    getters: {},
    actions: {
        AddMusicRecentlyCS(item) {
            if (  !this.RecentlyAddedData.some(
                (item2) => item2.SongTitle === item.SongTitle)
            ) {
                this.RecentlyAddedData.push(item);
                console.log("已添加：" + item);
                ElMessage({
                    message: "添加成功",
                    type: "success",
                    plain: true,
                  });
            } else {
                ElMessage({
                    message: "已经添加过",
                    type: "success",
                    plain: true,
                  });
            }
        },   
        
    },
    persist: {
        paths: ["RecentlyAddedData"],
        enabled: true,
        strtegies: [{
            key: "RecentlyAdded",
            storage: localStorage,
        }, ],
    },
});