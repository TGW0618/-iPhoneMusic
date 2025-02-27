<template>
  <div>
    <el-row
      class="mangeRow"
      style="gap: 20px"
      v-for="item in ManagementSongList"
      :key="item.id"
    >
      <div class="mangeList1">
        <el-row>
          <el-col :span="2">
            <div style="width: 85px; height: 85px">
              <img class="type-img1" :src="item.imgURL" alt="" />
            </div>
          </el-col>
          <el-col :span="6">
            <div
              style="
                line-height: 25px;
                font-size: 13px;
                margin-top: 20px;
                margin-left: 10px;
              "
            >
              <p style="">歌名：{{ item.SongTitle }}</p>
              <p style="color: #656565">歌手：{{ item.ArtistName }}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              style="
                line-height: 25px;
                font-size: 13px;
                margin-top: 20px;
                margin-left: 10px;
              "
            >
              <p style="">歌曲时长：{{ item.Duration }}</p>
              <p style="color: #656565">发行时间：{{ item.SongIssueDate }}</p>
            </div>
          </el-col>
          <el-col :span="6">
            <div
              style="
                line-height: 25px;
                font-size: 13px;
                margin-top: 20px;
                margin-left: 10px;
              "
            >
              <p style="">歌曲类型：{{ item.typeName }}</p>
              <p style="color: #656565">所属专辑：{{ item.AlbumName }}</p>
            </div>
          </el-col>
          <el-col :span="4">
            <div
              style="
                line-height: 50px;
                font-size: 13px;
                margin-top: 20px;
                margin-left: 10px;
              "
            >
              <p class="buttonAll">
                <button
                  text
                  @click="(centerDialogVisible = true), songData(item)"
                >
                  编辑
                </button>
                <el-popconfirm
                  width="220"
                  :icon="InfoFilled"
                  icon-color="#626AEF"
                  title="确定要删除吗?"
                  @cancel="onCancel"
                >
                  <template #reference>
                    <button>删除</button>
                  </template>
                  <template #actions="{ cancel }">
                    <el-button size="small" @click="cancel">取消</el-button>
                    <el-button
                      type="danger"
                      size="small"
                      @click="deleteSong(item)"
                    >
                      确定
                    </el-button>
                  </template>
                </el-popconfirm>

                <!-- <button @click="deleteSong(item)">删除</button> -->
              </p>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-row>
    <el-dialog v-model="centerDialogVisible" title="编辑" width="30%" center>
      <span>
        <el-form
          :label-position="labelPosition"
          label-width="100px"
          :model="songDataList"
          style="max-width: 460px"
        >
          <el-form-item label="歌名">
            <el-input v-model="songDataList.SongTitle" />
          </el-form-item>
          <el-form-item label="歌手">
            <el-input v-model="songDataList.ArtistName" />
          </el-form-item>
          <el-form-item label="歌曲时长">
            <el-input v-model="songDataList.Duration" />
          </el-form-item>
          <el-form-item label="发行时间">
            <el-input v-model="songDataList.SongIssueDate" />
          </el-form-item>
          <el-form-item label="歌曲类型">
            <el-input v-model="songDataList.typeName" />
          </el-form-item>
          <el-form-item label="所属专辑">
            <el-input v-model="songDataList.AlbumName" />
          </el-form-item>
          <el-form-item label="图片">
            <el-input v-model="songDataList.imgURL" />
          </el-form-item>
        </el-form>
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">关闭</el-button>
          <el-button type="primary" @click="centerDialogVisible = false">
            保存
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { InfoFilled } from "@element-plus/icons-vue";

const props = defineProps({
  ManagementSongList: Array,
});

const songDataList = ref(null);
const songData = (item) => {
  console.log(item);
  songDataList.value = item;
  console.log(songDataList.value);
};

const allSong = ref(props.ManagementSongList);
const isDelIndex = ref(null);
const deleteSong = (item) => {
  // console.log(item.SongTitle);
  // console.log(allSong.value.findIndex((item1) => item1.id === item.id || item1.SongTitle === item.SongTitle));
  isDelIndex.value = allSong.value.findIndex(
    (item1) => item1.id === item.id && item1.SongTitle === item.SongTitle
  );

  if (isDelIndex.value) {
    allSong.value.splice(isDelIndex.value, 1);
  } else {
    alert("删除失败");
  }
};

const clicked = ref(false);
function onCancel() {
  clicked.value = true;
}

const centerDialogVisible = ref(false);
</script>

<style lang="scss" scoped>
.mangeRow:hover {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 5px 5px 8px 1px rgba(0, 0, 0, 0.117);
}
.mangeList1 {
  border-radius: 8px;
  width: 100%;
  height: 90px;
  border-bottom: 1px solid #97979734;
  cursor: pointer;
}

.type-img1 {
  width: 80%;
  height: 80%;
  background-color: cadetblue;
  border-radius: 8px;
  margin-top: 12px;
  margin-left: 12px;
}

.type-name {
  padding: 0px 0px 5px 10px;
  font-size: 25px;
  font-weight: bold;
  color: white;
}
.buttonAll > button {
  border-radius: 4px;
  border: none;
  margin-left: 10px;
  width: 60px;
  height: 30px;
  color: white;
  background-color: #d60017;
  cursor: pointer;
}
.buttonAll > :nth-child(1) {
  background-color: #2563eb;
}
.buttonAll > button:hover {
  background-color: #001172de;
}
</style>
