<template>
  <div>
    <form @click="toSelectView" @submit.prevent="onSelect">
      <el-input v-model.trim="inputSelect" placeholder="搜索" clearable>
      </el-input>
    </form>
  </div>
</template>

<script setup>
import router from "../router/router";
import { ref , watch} from "vue";
import { useHomePageData } from "../store/Homepage";
import { storeToRefs } from "pinia";
import { ElMessage } from "element-plus";
const HomePage = useHomePageData();
const { HomepageData,SelectDataList } = storeToRefs(HomePage);

const toSelectView = () => {
  router.push("/SelectView");
};

const inputSelect = ref(null);
const selectData = ref(null);
const onSelect = () => {
  if (inputSelect.value != null) {
    console.log(inputSelect.value);
    const selectHomepageData = HomepageData.value.filter(item => item.SongTitle.includes(inputSelect.value) || item.ArtistName.includes(inputSelect.value) || item.AlbumName.includes(inputSelect.value))
    if (selectHomepageData.length > 0) {
      selectData.value = selectHomepageData
      SelectDataList.value = selectHomepageData
    } else {
      ElMessage({
        message: "没有该歌曲！",
        type: "warning",
      });
    }


  } else {
    console.log("null");
  }
};

// watch ( onSelect,(inputSelect,SelectDataList) => {
//   console.log('新:'+inputSelect.value);
//   console.log("旧:"+SelectDataList.value);
// })

</script>

<style lang="scss" scoped></style>
