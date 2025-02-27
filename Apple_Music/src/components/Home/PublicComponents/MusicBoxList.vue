<template>
  <div>
    <el-row class="MusicBoxList-row">
      <el-col
        v-for="item in MusicBoxList"
        :key="item.id"
        :xs="2"
        :sm="2"
        :md="3"
        :lg="4"
        :xl="11"
        class="MusicBoxList-col"
      >
        <div class="MusicBoxListOne666">
          <div style="width: 176px;height: 176.3px;margin-bottom: -176px;">
            <!-- 外层内容 -->
            <div class="touMingBg" >
              <!-- 透明背景 -->
               <div @click="toSonView(item)" style="width: 100%;height: 100%;">
                &nbsp;
               </div>
              <!-- 按钮 -->
              <div>
                <el-popover placement="right" trigger="click">
                  <template #reference>
                    <div class="buttonNB">…</div>
                  </template>
                  <div v-if="!isAuthenticated">
                    <div
                      v-for="(gridDataItem, index) in gridData.slice(
                        gridData.length - 1,
                        gridData.length
                      )"
                      :key="index"
                    >
                      <p
                        style="
                          height: 30px;
                          line-height: 30px;

                          border-radius: 5px;
                          border-top: solid #ccccce 1px;
                          cursor: pointer;
                        "
                        @click="ClickCS(item, gridDataItem)"
                      >
                        {{ gridDataItem.date }}
                      </p>
                    </div>
                  </div>
                  <div v-else>
                    <div
                      v-for="gridDataItem in gridData"
                      :key="gridDataItem.id"
                    >
                      <p
                        style="
                          height: 30px;
                          line-height: 30px;

                          border-radius: 5px;
                          border-top: solid #ccccce 1px;
                          cursor: pointer;
                        "
                        @click="ClickCS(item, gridDataItem)"
                      >
                        {{ gridDataItem.date }}
                      </p>
                    </div>
                  </div>
                </el-popover>
              </div>
            </div>
          </div>
          <!-- 展示的内容 -->
          <div style="z-index: 0">
            <div>
              <img class="MusicBoxList-img" :src="item.imgURL" alt="" />
            </div>
            <p class="MusicBoxList-p1">{{ item.SongTitle }}</p>
            <p class="MusicBoxList-p2">{{ item.ArtistName }}</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import router from "../../../router/router";
import { useAuthStore } from "../../../store/auth";
import { useTwoViewStore } from "../../../store/TwoView";

import { useRecentlyAdded } from "../../../store/RecentlyAdded";
import { storeToRefs } from "pinia";

const RecentlyAdded = useRecentlyAdded();
const { RecentlyAddedData } = storeToRefs(RecentlyAdded);
const authStore = useAuthStore();
const { isAuthenticated } = authStore;
const TwoView = useTwoViewStore();
const { TwoViewData, isTopViewL, isTopViewR } = storeToRefs(TwoView);

const props = defineProps({
  MusicBoxListData: Array,
});
const MusicBoxList = ref(props.MusicBoxListData || []);

const toSonView = (item) => {
  router.push("/MusicBoxListSonView" + item.id);
  // console.log(item.id+item.SongTitle);
  TwoViewData.value = item;
  isTopViewL.value = 0;
  isTopViewR.value = 1;
};

const gridData = [
  {
    id: 1,
    date: "添加到歌单",
  },
  {
    id: 2,
    date: "从资料库删除",
  },
  {
    id: 3,
    date: "插播",
  },
  {
    id: 4,
    date: "最后播放",
  },
  {
    id: 5,
    date: "个人收藏",
  },
  {
    id: 6,
    date: "减少推荐",
  },
  {
    id: 7,
    date: "分享",
  },
];

const ClickCS = (item, gridDataItem) => {
  if (gridDataItem.date == '添加到歌单') {
    console.log('添加到歌单');

  } else if (gridDataItem.date == '从资料库删除') {
    console.log('从资料库删除');
    const index = RecentlyAddedData.value.findIndex((itemRecently) => itemRecently.id == item.id && itemRecently.SongTitle == item.SongTitle );
    if (index !== -1) {
      RecentlyAddedData.value.splice(index, 1);
    } else {
      console.log('没有找到');
    }
  }else { 
    console.log('其他');
  }
  }
</script>

<style lang="scss" scoped>
.MusicBoxList-row {
  width: 100%;
  gap: 30px;
  height: auto;
}

.MusicBoxList-col {
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
  padding: 0px;
}

.MusicBoxList-a {
  width: 100%;
}

.MusicBoxList-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.121);
}

.MusicBoxList-img:hover {
  transition: 0.3s ease-in-out;
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.215);
}

.MusicBoxList-p1 {
  font-size: 12px;
  color: #1e1e1e;
}

.MusicBoxList-p2 {
  font-size: 12px;
  color: #686868;
}
.MusicBoxListOne666{
  position: relative;
  width: 100%;
  height: 100%;
  // background-color: #d60017;
}
.touMingBg {
  position: absolute;
  width: 100%;
  height: 81.3%;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.25);
  display: none;
}
.MusicBoxListOne666:hover .touMingBg {
  display: block;
}

.buttonNB {
  background-color: rgba(126, 126, 126, 0.6);
  width: 30px;
  position: relative;
  left: 76%;
  top: -45px;
  border-radius: 30px;
  height: 30px;
  color: white;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  display: none;
}
.MusicBoxListOne666:hover .buttonNB {
  display: block;
}

.buttonNB:hover {
  background-color: #d60017;
}
</style>
