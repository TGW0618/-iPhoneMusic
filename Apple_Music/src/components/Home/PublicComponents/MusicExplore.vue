<template>
  <div>
    <el-row class="Explore">
      <div class="Explore-box" v-for="item in ExploreData" :key="item.id">
          <el-row>
            <el-col :span="22"
              ><div class="Explore-left">{{ item.ExploreTitle }}</div></el-col
            >
            <el-col :span="2"><div class="Explore-right">></div></el-col>
          </el-row>
      </div>
    </el-row>
  </div>
</template>

<script setup>

const props = defineProps({
  ExploreData: {
    type: Array,
    default: () => [],
  },
});

</script>

<style lang="scss" scoped>
.Explore {
  width: 100%;
  gap: 19.5px;
  padding-bottom: 15px;
}
.Explore-box {
  width: 32%;
  background-color: #f2f2f2;
  border-radius: 5px;
  height: 45px;
}
.Explore-left {
  padding-left: 10px;
  line-height: 45px;
  color: #d60017;
}
.Explore-right {
  padding-right: 10px;
  text-align: right;
  line-height: 45px;
  color: #d60017;
}
</style>
