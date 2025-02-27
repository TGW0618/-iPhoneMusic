<template>
  <div class="bigBox">
    <div class="bigBox1" style="background: red">专属歌单</div>
    <div class="carousel">
      <button @click="prevPage" class="carousel-button prev">&#10094;</button>
      <div class="imageContainer">
        <div v-for="(image, index) in visibleImages" :key="index" class="bigBox2">
          <img :src="image.src" :alt="image.alt" />
          <div class="bigBox2-1">
            <span>{{ image.title }}</span><br>
            <span>{{ image.artist }}</span><br>
            <span>{{ image.album }}</span>
          </div>
          <button @click="toggleShare(index)" class="share-button">...</button>
          <div v-if="showShare === index" class="share-menu">
            <a href="#" @click.prevent="shareTo('facebook')">分享到 Facebook</a>
            <a href="#" @click.prevent="shareTo('twitter')">分享到 Twitter</a>
            <a href="#" @click.prevent="shareTo('wechat')">分享到 微信</a>
          </div>
        </div>
      </div>
      <button @click="nextPage" class="carousel-button next">&#10095;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const images = [
  { src: '/src/assets/image/MusicBoxListBigImg-1.webp', alt: 'Music Box Image 1', title: '歌曲名: 示例歌曲 1', artist: '艺人: 示例艺人 1', album: '专辑: 示例专辑 1' },
  { src: '/src/assets/image/MusicBoxListBigImg-2.webp', alt: 'Music Box Image 2', title: '歌曲名: 示例歌曲 2', artist: '艺人: 示例艺人 2', album: '专辑: 示例专辑 2' },
  { src: '/src/assets/image/MusicBoxListBigImg-3.webp', alt: 'Music Box Image 3', title: '歌曲名: 示例歌曲 3', artist: '艺人: 示例艺人 3', album: '专辑: 示例专辑 3' },
  { src: '/src/assets/image/MusicBoxListBigImg-4.webp', alt: 'Music Box Image 4', title: '歌曲名: 示例歌曲 4', artist: '艺人: 示例艺人 4', album: '专辑: 示例专辑 4' },
  { src: '/src/assets/image/MusicBoxListBigImg-5.webp', alt: 'Music Box Image 5', title: '歌曲名: 示例歌曲 5', artist: '艺人: 示例艺人 5', album: '专辑: 示例专辑 5' },
  { src: '/src/assets/image/MusicBoxListBigImg-6.webp', alt: 'Music Box Image 6', title: '歌曲名: 示例歌曲 6', artist: '艺人: 示例艺人 6', album: '专辑: 示例专辑 6' },
  { src: '/src/assets/image/MusicBoxListBigImg-7.webp', alt: 'Music Box Image 7', title: '歌曲名: 示例歌曲 7', artist: '艺人: 示例艺人 7', album: '专辑: 示例专辑 7' },
  { src: '/src/assets/image/MusicBoxListBigImg-8.webp', alt: 'Music Box Image 8', title: '歌曲名: 示例歌曲 8', artist: '艺人: 示例艺人 8', album: '专辑: 示例专辑 8' },
  { src: '/src/assets/image/MusicBoxListBigImg-9.webp', alt: 'Music Box Image 9', title: '歌曲名: 示例歌曲 9', artist: '艺人: 示例艺人 9', album: '专辑: 示例专辑 9' },
  { src: '/src/assets/image/MusicBoxListBigImg-10.webp', alt: 'Music Box Image 10', title: '歌曲名: 示例歌曲 10', artist: '艺人: 示例艺人 10', album: '专辑: 示例专辑 10' },
  { src: '/src/assets/image/MusicBoxListBigImg-11.webp', alt: 'Music Box Image 11', title: '歌曲名: 示例歌曲 11', artist: '艺人: 示例艺人 11', album: '专辑: 示例专辑 11' }
];

const currentPage = ref(0);
const itemsPerPage = 4;
const showShare = ref(null);

const totalPages = Math.ceil(images.length / itemsPerPage);

const visibleImages = computed(() => {
  const start = currentPage.value * itemsPerPage;
  return images.slice(start, start + itemsPerPage);
});

const nextPage = () => {
  if (currentPage.value < totalPages - 1) {
    currentPage.value++;
  }
};

const prevPage = () => {
  if (currentPage.value > 0) {
    currentPage.value--;
  }
};

const toggleShare = (index) => {
  if (showShare.value === index) {
    showShare.value = null;
  } else {
    showShare.value = index;
  }
};

const shareTo = (platform) => {
  // 这里可以根据不同的平台实现具体的分享逻辑
  alert(`分享到 ${platform}`);
};
</script>

<style lang="scss" scoped>
.bigBox {
  width: 100%;
  height: auto; /* 高度自适应 */
  background-color: #ffffff;
  display: flex;
  flex-direction: column; /* 垂直方向排列 */
  justify-content: flex-start; /* 内容靠上对齐 */
  align-items: flex-start; /* bigBox2 靠左对齐 */

  .bigBox1 {
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: flex-start; /* 文字靠左对齐 */
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    padding-left: 10px; /* 左侧内边距 */
  }

  .carousel {
    position: relative;
    width: 100%; /* 设置容器宽度为父元素的100% */
    margin-top: 20px; /* 上方间距 */
    display: flex;
    justify-content: space-between; /* 图片之间均匀分布 */
    align-items: center;

    &:hover .carousel-button {
      opacity: 1;
    }

    .carousel-button {
      background-color: rgba(0, 0, 0, 0.5);
      color: white;
      border: none;
      padding: 10px;
      cursor: pointer;
      z-index: 10;
      opacity: 0;
      transition: opacity 0.3s ease-in-out;

      &.prev {
        left: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      &.next {
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    }

    .imageContainer {
      display: flex;
      justify-content: space-around; /* 图片之间均匀分布 */
      width: calc(100% - 40px); /* 减去左右按钮的宽度 */
      box-sizing: border-box;
      padding: 0 20px; /* 添加左右内边距以防止图片贴边 */

      .bigBox2 {
        position: relative;
        flex: 1 1 calc(25% - 20px); /* 每张图片占据大约25%的宽度减去间隔 */
        max-width: 250px; /* 最大宽度限制 */
        height: 270px;
        margin: 0 10px; /* 图片之间的间隔 */
        border-radius: 10px; /* 圆角设置 */
        box-sizing: border-box;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover; /* 图片覆盖整个 bigBox2 */
          border-radius: 10px; /* 圆角设置 */
        }

        .bigBox2-1 {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%; /* 大盒子的宽度与 bigBox2 相同 */
          height: calc(100% / 3); /* 大盒子的高度为 bigBox2 的三分之一 */
          background-color: rgba(255, 255, 255, 0.5); /* 半透明背景色 */
          color: white; /* 字体颜色为白色 */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 10px;
          box-sizing: border-box;
          border: none; /* 去除边框线 */
          line-height: 0.8; /* 调整行距 */
          overflow: hidden; /* 确保文字不超出盒子 */
        }

        .share-button {
          position: absolute;
          bottom: 10px;
          left: 10px;
          background-color: rgba(0, 0, 0, 0.5);
          color: white;
          border: none;
          padding: 5px;
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          z-index: 10;
        }

        &:hover .share-button {
          opacity: 1;
        }

        .share-menu {
          position: absolute;
          bottom: 40px;
          left: 10px;
          background-color: white;
          border: 1px solid #ccc;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          z-index: 11;

          a {
            display: block;
            padding: 10px;
            text-decoration: none;
            color: black;

            &:hover {
              background-color: #f0f0f0;
            }
          }
        }
      }
    }
  }
}
</style>