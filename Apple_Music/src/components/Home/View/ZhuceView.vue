<template>
  <div>
    <div class="ZhuCeDiv">
      <div class="ZhuCeDiv2">欢迎注册</div>
      <form>
        <p>账号</p>
        <el-input v-model="inputName" placeholder="请输入账号" />
        <div>&nbsp;</div>
        <p>密码</p>
        <el-input
          v-model="inputPassword"
          placeholder="请输入密码"
          show-password
        />
      </form>
      <div>
        <div>&nbsp;</div>
        <el-button style="width: 100%" type="primary" @click="buttonZhuCe"
          >注册</el-button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElMessage } from "element-plus";
import { ref } from "vue";
import api from "../../../services/api";
import router from "../../../router/router";

// 注册
const inputName = ref(null);
const inputPassword = ref(null);

const buttonZhuCe = async () => {
  console.log("注册");
  if (inputName.value == null || inputPassword.value == null) {
    alert("请输入账号和密码！");
    return;
  } else {
    const response = await api.post("/register", {
      uname: inputName.value,
      upw: inputPassword.value,
    });
    if (response.data.code === 200) {
      ElMessage({
        message: "注册成功",
        type: "success",
      });
      router.push("/Homepage");
    } else {
      ElMessage({
        message: "账号已存在！",
        type: "error",
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.ZhuCeDiv {
  width: 20%;
  margin-left: 40%;
  background-color: white;
  height: 460px;
  padding: 35px;
  border-radius: 10px;
  margin-top: 40px;
}
.ZhuCeDiv2 {
  font-size: 35px;
  padding-bottom: 30px;
  padding-top: 20px;
}
p {
  padding-bottom: 8px;
}
</style>
