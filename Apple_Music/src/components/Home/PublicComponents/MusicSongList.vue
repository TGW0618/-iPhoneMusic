<template>
  <div class="carousel-container">
    <el-carousel
      class="carousel"
      :interval="30000"
      trigger="click"
      indicator-position="outside"
      height="250px"
    >
      <el-carousel-item
        style="padding-top: 32px"
        v-for="(pageItems, index) in paginatedItems"
        :key="index"
      >
        <div class="carousel-page">
          <!-- 每页 3 列 -->
          <div
            class="column"
            v-for="(column, columnIndex) in pageItems"
            :key="columnIndex"
          >
            <div
              class="item"
              v-for="(item, itemIndex) in column"
              :key="itemIndex"
            >
              <el-row style="height: 47px">
                <el-col :span="4">
                  <div @click="MyMusic(item)" style="width: 45px;">
                    <img
                      class="SongImg"
                      :src="item.imgURL"
                      alt="点击播放音乐"
                    />
                  </div>
                </el-col>
                <el-col :span="16">
                  <div
                    style="
                      text-align: left;
                      padding-left: 10px;
                      padding-top: 4px;
                    "
                  >
                    <a href="">
                      <p style="font-size: 13px; color: #1e1e1e">
                        {{ item.SongTitle }}
                      </p>
                    </a>
                    <a href="">
                      <p style="font-size: 13px; color: #707070">
                        {{ item.ArtistName }}
                      </p>
                    </a>
                  </div>
                </el-col>

                <el-col :span="2">
                  <div
                    style="padding-top: 8px; font-weight: bold; color: #d60017"
                  >
                    <p v-if="!isAuthenticated"></p>
                    <p v-else>
                      <el-tooltip
                        content="添加到资料库"
                        placement="bottom"
                        efffect="light"
                      >
                        <p
                          :plain="true"
                          @click="AddMusicRecently(item)"
                          style="cursor: pointer"
                        >
                          +
                        </p>
                      </el-tooltip>
                    </p>
                  </div>
                </el-col>
                <el-col :span="2">
                  <div
                    style="padding-top: 4px; font-weight: bold; color: #d60017"
                  >
                    <el-popover
                      style="background-color: aqua"
                      placement="right"
                      trigger="click"
                    >
                      <template #reference>
                        <p style="cursor: pointer">...</p>
                      </template>
                      <div v-if="!isAuthenticated">
                        <div
                          v-for="(gridDataItem, index) in gridData.slice(
                            gridData.length - 2,
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
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { computed, provide, ref } from "vue";

import { useAuthStore } from "../../../store/auth";
import { useRecentlyAdded } from "../../../store/RecentlyAdded";
import { useAudioStore } from "../../../store/Audio";
import  { useTwoViewStore } from "../../../store/TwoView";

import { ElMessage } from "element-plus";
import router from "../../../router/router";
import { storeToRefs } from "pinia";

const authStore = useAuthStore();
const { isAuthenticated } = authStore;

const RecentlyAdded = useRecentlyAdded();
const Audio = useAudioStore();

const TwoView = useTwoViewStore();
const { TwoViewData,isTopViewL,isTopViewR} = storeToRefs(TwoView);

const props = defineProps({
  MusicDBlistProps: Array,
});

const MusicDBlistAll = ref(props.MusicDBlistProps);

// 每页显示三列
const columnsPerPage = 3;
// 每列显示四项
const itemsPerColumn = 4;
// 计算分页内容，确保每页展示 3 列，每列 4 项数据
const paginatedItems = computed(() => {
  const result = [];

  // 每页应包含 3 列
  const totalColumns = columnsPerPage;
  const totalItemsPerPage = totalColumns * itemsPerColumn;

  // 将项目分配到分页数组中，每页3列，每列4项
  for (let i = 0; i < MusicDBlistAll.value.length; i += totalItemsPerPage) {
    const pageItems = [];

    // 为当前页创建 3 列
    for (let j = 0; j < totalColumns; j++) {
      const columnItems = MusicDBlistAll.value.slice(
        i + j * itemsPerColumn,
        i + (j + 1) * itemsPerColumn
      );
      pageItems.push(columnItems);
    }

    result.push(pageItems);
  }

  return result;
});

// 添加功能
const AddMusic = ref(true);
const AddMusicRecently = (item) => {
  if (MusicDBlistAll.value.some((listitem) => listitem.id === item.id)) {
    RecentlyAdded.AddMusicRecentlyCS(item);
    ElMessage({
      message: "添加成功",
      type: "success",
      plain: true,
    });
    AddMusic.value = false;
  } else {
    console.log("没有这个歌曲");
  }
};

// 播放数据传递
const MyMusic = (item) => {
  // console.log('传递：',item);
  Audio.MyMusicAudio(item);
  if (item != null) {
    Audio.audioList = MusicDBlistAll.value;
    console.log(MusicDBlistAll.value);
  }
};

const gridData = [
  {
    id: 1,
    date: "添加到歌单",
  },
  {
    id: 2,
    date: "从资料库中删除",
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
    date: "创建电台",
  },
  {
    id: 6,
    date: "个人收藏",
  },
  {
    id: 7,
    date: "减少推荐",
  },
  {
    id: 8,
    date: "查看制作人员",
  },
  {
    id: 9,
    date: "分享",
  },
];

const ClickCS = (item, gridDataItem) => {
  
  if (gridDataItem.id == 1) {
    console.log("点击了:" + gridDataItem.date+', 跳转页面:'+item.SongTitle);
    // router.push('MusicBoxListSonView'+item.id+item);
  } else if (gridDataItem.id == 2) {
    console.log("点击了:" + gridDataItem.date+', 跳转页面:'+item.SongTitle);
  } else if (gridDataItem.id == 8) {
    console.log("点击了:" + gridDataItem.date+', 跳转页面:'+item.SongTitle);
    console.log(item);
    router.push('/MusicBoxListSonView'+item.id)
    console.log(TwoViewData.value = item);
    isTopViewL.value = 0;
    isTopViewR.value = 0;
  } else {
    console.log("这个功能不想做");
    alert("太累了我们不想做"+gridDataItem.date+"!");
  }
};
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin: 0 auto;
  /* background-color: #f0f0f0; */
}

.carousel-page {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  /* 列之间的间距 */
}

.column {
  flex: 1;
  /* 每列占据相同宽度 */
}

.item {
  margin-bottom: 10px;
  border-radius: 5px;
  height: auto;
 
}

.item:hover {
  box-shadow: 6px 4px 8px 1px rgba(0, 0, 0, 0.117);
}

.SongImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;
 
}

.SongImg:active {
  transition: 0.1s ease-in-out;
  box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.117);
}

.table-column {
  height: 10px;
}
</style>
