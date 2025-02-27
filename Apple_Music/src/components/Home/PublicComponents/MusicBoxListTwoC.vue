<template>
  <div class="carousel-container">
    <el-carousel
      
      :interval="30000"
      trigger="click"
      indicator-position="outside"
      height="210px"
    >
      <div v-for="(pageItems, index) in paginatedItems" :key="index">
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
              <el-row style="height: 100%; width: 100%">
                <el-col :span="7" style="height: 100%">
                  <div style="height: 100%; width: 102px">
                    <img
                      class="SongImg"
                      :src="item.imgURL"
                      alt="点击播放音乐"
                    />
                  </div>
                </el-col>

                <el-col :span="13" style="line-height: 100px">
                  <div style="text-align: left;margin-left: 20px;">
                    <p style="font-size: 13px; color: #1e1e1e">
                      {{ item.SongTitle
                      }}<span>&nbsp;{{ item.ArtistName }}</span>
                    </p>
                  </div>
                </el-col>
                <el-col :span="2" style="line-height: 80px">
                  <div
                    style="padding-top: 4px; font-weight: bold; color: #d60017"
                  >
                    <el-popover placement="right" trigger="click">
                      <template #reference>
                        <p style="cursor: pointer">...</p>
                      </template>
                      <el-table :data="gridData">
                        <el-table-column property="date" />
                      </el-table>
                    </el-popover>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </el-carousel>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";




const props = defineProps({
  MusicDBlistProps: Array,
});

const MusicDBlist = ref(props.MusicDBlistProps);

// 每页显示三列
const columnsPerPage = 3;
// 每列显示2项
const itemsPerColumn = 2;
// 计算分页内容，确保每页展示 3 列，每列 4 项数据
const paginatedItems = computed(() => {
  const result = [];

  // 每页应包含 3 列
  const totalColumns = columnsPerPage;
  const totalItemsPerPage = totalColumns * itemsPerColumn;

  // 将项目分配到分页数组中，每页3列，每列4项
  for (let i = 0; i < MusicDBlist.value.length; i += totalItemsPerPage) {
    const pageItems = [];

    // 为当前页创建 3 列
    for (let j = 0; j < totalColumns; j++) {
      const columnItems = MusicDBlist.value.slice(
        i + j * itemsPerColumn,
        i + (j + 1) * itemsPerColumn
      );
      pageItems.push(columnItems);
    }

    result.push(pageItems);
  }

  return result;
});



const gridData = [
  {
    date: "分享",
    name: "Jack",
    address: "New York City",
  },
];
</script>

<style scoped>
.carousel-container {
  width: 100%;
  margin: 0 auto;
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

  height: 100px;
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
