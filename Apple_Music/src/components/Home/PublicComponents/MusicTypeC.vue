<template>
  <div style="display: flex; height: auto; width: 100%; flex-wrap: wrap">
    <!-- 左边 -->
    <div style="height: auto; width: 35%">
      <div style="height: 100%; width: 100%">
        <img class="left-img" :src="typeData.typeImg" alt="" />
      </div>
    </div>

    <!-- 右边 -->
    <div style="height: 100%; flex: 1; padding-left: 40px; font-weight: 900">
      <div style="font-size: 45px">
        {{ typeData.typeName }}
      </div>
      <div>内容</div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  typeData: Object,
});
</script>

<style lang="scss" scoped>
@media (max-width: 768px) {
  div {
    flex-direction: column; /* 改变为垂直排列 */
  }
  div > div {
    width: 100%; /* 宽度设为 100% */
  }
}

.left-img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.121);
}
</style>
