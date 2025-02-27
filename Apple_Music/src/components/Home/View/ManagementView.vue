<template>
  <div>
    <div>
        <!-- 头部 -->
      <div style="position: fixed;z-index: 99;background-color: white;padding-bottom: 10px;">
        <ManagementTop></ManagementTop>
      </div>
      <!-- 内容 -->
      <div style="padding: 20px;border-radius: 9px;border: 2px solid #f3f4f6; padding-top: 44px;">
        <ManagementList :ManagementSongList="Management.ManagementList"></ManagementList>
      </div>
    </div>

    <div>
      <!-- {{ Management.ManagementList }}
      <div>
            <ManagementSelect></ManagementSelect>
        </div> -->
    </div>
  </div>
</template>

<script setup>
import ManagementTop from "../Management/ManagementTop.vue";
import ManagementList from "../Management/ManagementList.vue";
import ManagementSelect from "../PublicComponentsSon/ManagementSelect.vue";

import { useManagement } from "../../../store/Management";
import { storeToRefs } from "pinia";

const Management = useManagement();
const { SelectDataList } = storeToRefs(Management);




</script>

<style lang="scss" scoped></style>
