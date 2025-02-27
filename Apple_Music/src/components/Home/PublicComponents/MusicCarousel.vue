<template>
  <div class="carousel-container">
    <el-carousel :interval="4000" type="card" style="width: 100%; height:303.5px;">
      <el-carousel-item v-for="item in props.MusicCarouselDataS" :key="item.id" style="width:50%;height: auto;">
        <div >
          <img @click="ClickCarousel(item)" class="MusicCarousel-img" :src="item.imgURL" alt="" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup>
import router from '../../../router/router';
import { useTwoViewStore } from "../../../store/TwoView";
import { storeToRefs } from "pinia";

const props = defineProps({
  MusicCarouselDataS: Array,
});

const TwoView = useTwoViewStore();
const { TwoViewData, isTopViewL, isTopViewR } = storeToRefs(TwoView);

const ClickCarousel = (item) => {
  router.push('/MusicBoxListSonView' + item.id);
  console.log(TwoViewData.value = item);
  isTopViewL.value = 1;
  isTopViewR.value = 1;
};
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  
}

.el-carousel {
  // background-color: rgb(181, 22, 133);
  height: 400px;
}

.el-carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
}

.MusicCarousel-img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: contain; /* 确保图片完整显示且不变形 */
  display: block;
  margin: 0 auto; /* 确保图片水平居中 */
}

/* 响应式设计：为小屏设备优化布局 */
@media (max-width: 768px) {
  .el-carousel {
    height: 300px; /* 在小屏幕上降低轮播高度 */
  }

  .MusicCarousel-img {
    width: 100%;
    height: auto; /* 保证图片高度自适应 */
  }
}

/* 更小屏幕设备时，调整轮播图的高度 */
@media (max-width: 480px) {
  .el-carousel {
    height: 200px; /* 更小屏幕时进一步减小高度 */
  }

  .MusicCarousel-img {
    height: auto; /* 让图片的高度根据内容自动适应 */
  }
}
</style>
