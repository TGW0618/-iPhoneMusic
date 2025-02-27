<template>
  <div>
    <!-- 头部 -->
    <div>
      <MusicTypeC :typeData="typeData" />
    </div>
    <!-- 相关内容 -->
     <div>
        
     </div>
  </div>
</template>

<script setup>
import MusicTypeC from "../PublicComponents/MusicTypeC.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const typeData = ref(route.query);
</script>

<style lang="scss" scoped></style>
