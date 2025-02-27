<template>
  <!-- 播放控件 -->
  <div class="PlayTop">
    <el-row>
      <el-col :span="4">
        <el-row style="height: 50px">
          <el-col
            :span="12"
            style="
              height: 100%;
              width: 100%;
              margin-top: 4.5px;
              padding-right: 0px;
            "
          >
            <div style="height: 50px; width: 50px; padding-left: 40%">
              <img class="SongImg" :src="imgURL" alt="" />
            </div>
          </el-col>
          <el-col
            :span="12"
            style="font-size: 10px; margin-top: 11px; padding-left: 10px"
          >
            <p style="font-weight: bold">{{ SongTitle }}</p>
            <p>{{ ArtistName }}</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="15">
        <el-row style="height: 50px">
          <el-col :span="1" style="height: 100%">
            <div style="width: 100%; height: 100%">
              <img
                @click="playUpCS"
                style="width: 20px; margin-top: 17px"
                src="/public//img//icon//Music_shang.png"
                alt="上一首"
              />
            </div>
          </el-col>
          <el-col :span="1"> </el-col>
          <el-col :span="1" style="height: 100%">
            <div style="width: 100%; height: 100%">
              <img
                @click="playDownCS"
                style="width: 20px; margin-top: 17px"
                src="/public//img//icon//Music_xia.png"
                alt="下一首"
              />
            </div>
          </el-col>
          <el-col :span="19">
            <audio ref="audioRef" controls preload loop class="audio">
              <source :src="SongURL" />
            </audio>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5" style="line-height: 55px">
        <el-row>
          <el-col :span="8">
            <!-- 播放清单按钮 -->
            <div @click="visible = true"><img src="#" alt="" />☰</div>
            <el-drawer v-model="visible" :show-close="false">
              <template #header="{ close, titleId, titleClass }">
                <h4 :id="titleId" :class="titleClass">待播清单</h4>
                <el-button type="danger" @click="close">
                  <el-icon class="el-icon--left">
                    <CircleCloseFilled />
                  </el-icon>
                  Close
                </el-button>
              </template>
              <!-- 待播放清单 -->
              <div v-for="item in audioList" :key="item.id">
                {{ item.SongTitle }}
              </div>
            </el-drawer>
          </el-col>
          <el-col :span="13">
            <!-- 登录按钮 -->
            <div
              @click="openLogin = true"
              class="LoginBu"
              v-if="!isAuthenticated"
            >
              登录
            </div>
            <div v-else @click="LoginOut" class="LoginBu">
              <span> 退出登录 </span>
            </div>
            <el-dialog v-model="openLogin" title="登录" width="30%" draggable>
              <span>
                <div style="height: 100px">
                  <form>
                    <el-input v-model="inputName" placeholder="请输入账号" />
                    <br />
                    <el-input
                      v-model="inputPassword"
                      type="password"
                      placeholder="请输入密码"
                      show-password
                    />
                  </form>
                </div>
              </span>
              <template #footer>
                <div>
                  <span class="dialog-footer">
                    <el-button @click="openLogin = false">取消</el-button>
                    <el-button type="primary" @click="newLogin">
                      登录
                    </el-button>
                  </span>
                </div>

                <div style="height: 15px; position: relative">
                  <a
                    href="/ZhuceView"
                    style="
                      color: black;
                      font-size: 12px;
                      position: absolute;
                      right: 0px;
                      top: -20px;
                    "
                    >立即注册
                  </a>
                </div>
              </template>
            </el-dialog>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import { CircleCloseFilled } from "@element-plus/icons-vue";
import { useAuthStore } from "../store/auth";
import { useAudioStore } from "../store/Audio";
import api from "../services/api";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const visible = ref(false); //播放清单开关

const authStore = useAuthStore();
const { isAuthenticated } = storeToRefs(authStore);
const router = useRouter();

const Audio = useAudioStore();
const { imgURL, SongTitle, ArtistName, SongURL, audioRef, audio, audioList } =
  storeToRefs(Audio);

// 上一曲开始
const playUpCS1 = ref(0);
const currentIndexLen = ref(-1);
const playUpCS = () => {
  const imgURLIndex = audio.value.map((item) => item.imgURL); //图片
  const SongTitleIndex = audio.value.map((item) => item.SongTitle); //歌名
  const ArtistNameIndex = audio.value.map((item) => item.ArtistName); //歌手
  const SongURLIndex = audio.value.map((item) => item.SongURL); //歌曲链接
  console.log("play音乐:" + SongTitleIndex); //点击过的音乐
  console.log("数组长度：" + SongTitleIndex.length);
  currentIndexLen.value = SongTitleIndex.length; //音乐数组长度

  if (currentIndexLen.value > 0) {
    playUpCS1.value++;
    console.log("单击次数" + playUpCS1.value);
    audioRef.value.load(); // 强制加载新的音频文件
    audioRef.value.play(); // 播放音频
    if (playUpCS1.value == SongTitleIndex.length) {
      playUpCS1.value = 0;
      console.log("最后一次点击的音乐：" + SongTitleIndex[playUpCS1.value]);
      SongTitle.value = SongTitleIndex[playUpCS1.value];
      imgURL.value = imgURLIndex[playUpCS1.value];
      ArtistName.value = ArtistNameIndex[playUpCS1.value];
      SongURL.value = SongURLIndex[playUpCS1.value];
      console.log("上一首音乐url：" + SongURL.value);
    } else {
      console.log("上一首音乐：" + SongTitleIndex[playUpCS1.value]);
      SongTitle.value = SongTitleIndex[playUpCS1.value];
      imgURL.value = imgURLIndex[playUpCS1.value];
      ArtistName.value = ArtistNameIndex[playUpCS1.value];
      SongURL.value = SongURLIndex[playUpCS1.value];
      console.log("上一首音乐url：" + SongURL.value);
    }
  } else {
    console.log("没有上一首");
  }
};
// 上一曲结束

// 下一曲开始
const playDownCS1 = ref(0);
const DownIndexLen = ref(0);
const playDownCS = () => {
  const imgURLIndex = audio.value.map((item) => item.imgURL); //图片
  const SongTitleIndex = audio.value.map((item) => item.SongTitle); //歌名
  const ArtistNameIndex = audio.value.map((item) => item.ArtistName); //歌手
  const SongURLIndex = audio.value.map((item) => item.SongURL); //歌曲链接
  DownIndexLen.value = SongTitleIndex.length; //音乐数组长度

  if (SongTitleIndex.length > 0) {
    playDownCS1.value++;
    audioRef.value.load(); // 强制加载新的音频文件
    audioRef.value.play(); // 播放音频
    if (SongTitleIndex.length - playDownCS1.value == 0) {
      playDownCS1.value = 0;
      SongTitle.value = SongTitleIndex[playDownCS1.value];
      imgURL.value = imgURLIndex[playDownCS1.value];
      ArtistName.value = ArtistNameIndex[playDownCS1.value];
      SongURL.value = SongURLIndex[playDownCS1.value];
    } else {
      SongTitle.value = SongTitleIndex[DownIndexLen.value - playDownCS1.value];
      imgURL.value = imgURLIndex[DownIndexLen.value - playDownCS1.value];
      ArtistName.value =
        ArtistNameIndex[DownIndexLen.value - playDownCS1.value];
      SongURL.value = SongURLIndex[DownIndexLen.value - playDownCS1.value];
    }
  } else {
    console.log("没有下一首");
  }
};
// 下一曲结束

//测试开始

// 新版登录
const openLogin = ref(false);
const inputName = ref("");
const inputPassword = ref("");

const newLogin = async () => {
  // 发起登录请求
  const response = await api.post("/login", {
    uname: inputName.value,
    upw: inputPassword.value,
  });
  if (response.data.code === 200) {
    authStore.setToken(response.data.data.token);
    authStore.setUser(response.data.data.user);
    ElMessage({
      message: "登录成功",
      type: "success",
    });
    openLogin.value = false;
  } else {
    ElMessage({
      message: "账号或密码错误！",
      type: "error",
    });
  }
};

// 退出登录
const LoginOut = async () => {
  authStore.clearAuth();
  router.push("/");
};
//测试结束
</script>

<style lang="scss" scoped>
.audio {
  width: 100%;
  border-radius: none;
  outline: none;
}

.LoginBu {
  background-color: #d60017;
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  border-radius: 8px;
  color: white;
}

.LoginBu_div {
  height: 14px;
  margin: 5px;
  overflow: hidden;
  margin-top: 13px;
}

.LoginBu_top {
  background-color: aliceblue;
  border-radius: 50%;
  width: 7px;
  height: 7px;
  margin-left: 8.5px;
}

.LoginBu_buttom {
  background-color: aliceblue;
  border-radius: 50%;
  width: 25px;
  height: 50px;
  margin-top: 2px;
  margin-left: 0px;
}

.SongImg {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  position: relative;
}
</style>
