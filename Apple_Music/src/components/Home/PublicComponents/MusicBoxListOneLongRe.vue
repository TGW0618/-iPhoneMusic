<template>
  <div class="MusicBoxListOneLongRe">
    <el-carousel style="width: 100%; border-radius: 8px" :interval="30000" trigger="click" indicator-position="outside">
      <el-carousel-item v-for="(page, index) in pagedData" :key="index">
        <div class="MusicBoxListOneLongRe-row">
          <div class="MusicBoxListOneLongRe-row-item" v-for="MusicBoxListData in page" :key="MusicBoxListData.id" >
            <router-link :to="'MusicBoxListSonView' + MusicBoxListData.id">
              <div class="MusicBoxListOneLongRe-row-ImgDiv">
                <img class="MusicBoxList-img" :src="MusicBoxListData.imgURL" alt="" />
              </div>
              <div>
                <p class="MusicBoxList-p1">
                  {{ MusicBoxListData.SongTitle }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  MusicBoxListOneData: Array,
});

const MusicBoxListData = ref(props.MusicBoxListOneData);

const pagedData = computed(() => {
  const pageSize = 4;
  const pages = [];
  for (let i = 0; i < MusicBoxListData.value.length; i += pageSize) {
    pages.push(MusicBoxListData.value.slice(i, i + pageSize));
  }
  return pages;
});
</script>

<style lang="scss">
.MusicBoxListOneLongRe {

  width: 100%;
  height: 160px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;

}

.MusicBoxListOneLongRe-row {

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  gap: 0px;
  justify-content: space-between;

}

.MusicBoxList-row {
  width: 100%;
  height: 220px;
  gap: 20px;
}

.MusicBoxListOneLongRe-row-item {

  width:250px;
  min-width: 150px;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;

}

.MusicBoxListOneLongRe-row-ImgDiv {
  background-color: blue;
  height: 135px;
  border-radius: 8px;

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
