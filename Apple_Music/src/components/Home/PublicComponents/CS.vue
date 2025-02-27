<template>
  <div>
    <el-row style="gap: 20px;">
      <el-loc 
      style="background-color: blue;
      border-radius: 8px;
      width: 249px;
      height: 140px;
   
      "
      v-for="item in MusicBoxListData" :key="item.id">
        <div>
          <img 
          style="width: 100%;height: 100%;background-color: cadetblue;border-radius: 8px;"
          :src="item.imgURL" alt="" />
        </div>
      </el-loc>
    </el-row>
  </div>
</template>

<script setup>


const MusicBoxListData = [
  {
    id: 1,
    SongTitle: "周杰伦",
    imgURL: "/src/assets/SelectViewImg/TypeSee/TypeSee-1.webp",
  },
  {
    id: 2,
    SongTitle: "周杰伦",
    imgURL: "/src/assets/SelectViewImg/TypeSee/TypeSee-1.webp",
  },
  {
    id: 3,
    SongTitle: "周杰伦",
    imgURL: "/src/assets/SelectViewImg/TypeSee/TypeSee-1.webp",
  },  {
    id: 3,
    SongTitle: "周杰伦",
    imgURL: "/src/assets/SelectViewImg/TypeSee/TypeSee-1.webp",
  },
];
</script>

<style lang="scss">
</style>
