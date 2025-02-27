<template>
  <div class="MusicBoxListOne">
    <el-carousel
      style="width: 100%; border-radius: 8px;"
      :interval="300000"
      trigger="click"
      indicator-position="outside"
      height="500px"
    >
      <el-carousel-item
        v-for="(pageItems, index) in paginatedItems"
        :key="index"
        style="height: auto;"
      >
        <div class="MusicBoxListOne-div">
          <div
            v-for="(column, columnIndex) in pageItems"
            :key="columnIndex"
            class="MusicBoxListOne-item"
          >
            <div  v-for="(item, itemIndex) in column" :key="itemIndex">
                <div class="MusicBoxListOne-divImg">
                  <img @click="ClickTwoBox(item)" class="MusicBoxList-img" :src="item.imgURL" alt="" />
                </div>
                <div style="height: 80px;">
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
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import router from '../../../router/router';
import  { useTwoViewStore } from "../../../store/TwoView";
import { storeToRefs } from "pinia";
const props = defineProps({
  MusicBoxListOneData: Array,
});

const MusicDBlistAll = ref(props.MusicBoxListOneData);
// 每页显示三列
const columnsPerPage = 5;
// 每列显示四项
const itemsPerColumn = 2;
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

const TwoView = useTwoViewStore();
const { TwoViewData,isTopViewL,isTopViewR } = storeToRefs(TwoView);

const ClickTwoBox = (item) => {
  router.push('/MusicBoxListSonView'+item.id)
  // console.log(TwoViewData.value = item);
  TwoViewData.value = item
  isTopViewL.value = 0;
  isTopViewR.value = 1;
};


</script>

<style lang="scss">
.MusicBoxListOne {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  border-radius: 8px; 
  // background-color: #c49c9c;
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
  width: 191px;
  min-width: 150px;
  height: 100%;
  overflow: hidden;
  
  
}

.MusicBoxListOne-divImg {
  
  
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
  background-color: #1e1e1e;
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
  padding-top: 5px;
  font-size: 12px;
  color: #1e1e1e;
}

.MusicBoxList-p2 {
  font-size: 12px;
  color: #686868;
}
</style>
