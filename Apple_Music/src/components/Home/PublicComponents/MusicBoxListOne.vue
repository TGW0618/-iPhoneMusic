<template>
  <div class="MusicBoxListOne">
    <el-carousel
      height="250px"
      style="width: 100%; border-radius: 8px"
      :interval="30000"
      trigger="click"
      indicator-position="outside"
    >
      <el-carousel-item v-for="(page, index) in pagedData" :key="index">
        <div class="MusicBoxListOne-div">
          <div
            style="position: relative"
            v-for="item in page"
            :key="item.id"
            class="MusicBoxListOne-item"
          >
            <div class="MusicBoxListOne666">
              <!-- 透明背景 -->
              <div class="touMingBg" @click="toSonView(item)">&nbsp;</div>
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
              <!-- 展示的内容 -->
              <div style="z-index: 0">
                <div class="MusicBoxListOne-divImg">
                  <img class="MusicBoxList-img" :src="item.imgURL" alt="" />
                </div>
                <div style="height: auto">
                  <p class="MusicBoxList-p1">
                    {{ item.SongTitle }}
                  </p>
                  <p class="MusicBoxList-p2">
                    {{ item.ArtistName }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import router from "../../../router/router";
import { ref, computed } from "vue";
import { useTwoViewStore } from "../../../store/TwoView";
import { useAuthStore } from "../../../store/auth";
import { useRecentlyAdded } from "../../../store/RecentlyAdded";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isAuthenticated } = authStore;
const recentlyAddedStore = useRecentlyAdded();

const props = defineProps({
  MusicBoxListOneData: Array,
});

const MusicBoxListData = ref(props.MusicBoxListOneData || []);

const pagedData = computed(() => {
  const pageSize = 5;
  const pages = [];
  for (let i = 0; i < MusicBoxListData.value.length; i += pageSize) {
    pages.push(MusicBoxListData.value.slice(i, i + pageSize));
  }
  return pages;
});

// console.log(MusicBoxListData.value);
const TwoView = useTwoViewStore();
const { TwoViewData, isTopViewL, isTopViewR } = storeToRefs(TwoView);

const toSonView = (item) => {
  router.push("/MusicBoxListSonView" + item.id);
  // console.log(item.id+item.SongTitle);
  TwoViewData.value = item;
  isTopViewL.value = 0;
  isTopViewR.value = 1;
};
const ClickCS = (item, gridDataItem) => {
  console.log("功能");
  if (gridDataItem.date == "添加到歌单") {
    console.log("添加到歌单");
    alert("添加到歌单");
  } else if (gridDataItem.date == "添加到资料库") {
    console.log("添加到资料库");
    // console.log( localStorage.setItem("RecentlyAddedData", JSON.stringify(MusicBoxListData.value)));
    recentlyAddedStore.AddMusicRecentlyCS(item);
    // console.log(recentlyAddedStore.value);
  } else {
    alert("不想做");
  }
};

const gridData = [
  {
    id: 1,
    date: "添加到歌单",
  },
  {
    id: 2,
    date: "添加到资料库",
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
</script>

<style lang="scss">
.MusicBoxListOne {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  // background-color: antiquewhite;
}

.MusicBoxListOne-div {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 20px;
  justify-content: space-between;
}

.MusicBoxListOne-item {
  width: 18%;
  min-width: 150px;
  height: 100%;
  overflow: hidden;
}

.MusicBoxListOne-divImg {
  // background-color: blue;
  height: 195px;
  border-radius: 8px;
}

.MusicBoxList-row {
  width: 100%;
  height: 220px;
  gap: 20px;
}

.MusicBoxList-col {
  width: 20%;
  height: 100%;
}

.MusicBoxList-a {
  width: 100%;
}

.MusicBoxList-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  // box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.121);
}

.MusicBoxList-img:hover {
  transition: 0.3s ease-in-out;
  box-shadow: 0px 6px 9px 0px rgba(0, 0, 0, 0.215);
}

.MusicBoxList-p1 {
  padding-top: 5px;
  font-size: 12px;
  color: #1e1e1e;
}

.MusicBoxList-p2 {
  font-size: 12px;
  color: #686868;
}
.touMingBg {
  position: absolute;
  width: 100%;
  height: 78%;
  border-radius: 6px;
  background-color: rgba(0, 0, 0, 0.25);
  display: none;
}
.MusicBoxListOne666:hover .touMingBg {
  display: block;
}

.buttonNB {
  background-color: rgba(126, 126, 126, 0.6);
  width: 30px;
  position: absolute;
  left: 80%;
  top: 60%;
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
