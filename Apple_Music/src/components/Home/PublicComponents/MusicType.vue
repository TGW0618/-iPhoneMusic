<template>
  <div>
    <el-row style="gap: 20px;">
      <div class="type-loc" v-for="item in MusicBoxListData" :key="item.id">
        <div @click="toTypeView(item)">
          <img class="type-img" :src="item.imgURL" alt="" />
          <div style="margin-top: -44px;">
            <p class="type-name">{{ item.typeName }}</p>
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script setup>
import router from "../../../router/router";


const props = defineProps({
  MusicBoxListData: Array,
});

const toTypeView = (item) => {
  router.push({
    path: "/TypeView",
    query: {
      typeId: item.typeId,
      typeName: item.typeName,
      typeImg: item.imgURL,
    },
  });
}

</script>

<style lang="scss">
.type-loc {
  border-radius: 8px;
  width: 249px;
  height: 140px;
  cursor: pointer;

}

.type-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.type-name {
  padding: 0px 0px 5px 10px;
  font-size: 25px;
  font-weight: bold;
  color: white;
}
</style>