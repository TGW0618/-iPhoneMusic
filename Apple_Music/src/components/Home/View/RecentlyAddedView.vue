<template>
    <div>
        <MusicBoxList :MusicBoxListData="RecentlyAddedData" />
    </div>
</template>

<script setup>
import MusicBoxList from "../PublicComponents/MusicBoxList.vue";
import { useRecentlyAdded } from "../../../store/RecentlyAdded";
import { storeToRefs } from "pinia";

const RecentlyAdded = useRecentlyAdded();
const { RecentlyAddedData } = storeToRefs(RecentlyAdded);


</script>

<style lang="scss" scoped>

</style>