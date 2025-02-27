<template>
  <div style="padding-top: 10px;width: 100%;">
    <el-row
      style="
        gap: 0px;
        border-top: 2px solid #f3f4f6;
        border-radius: 10px;
        padding-left: 0px;
      "
    >
      <div
        @click="playManagement(item)"
        class="type-loc1M"
        v-for="item in BoxTitle"
        :key="item.id"
      >
        <el-row>
          <p class="type-nameM">{{ item.name }}</p>
        </el-row>
      </div>
      <div>
        <input
          type="text"
          style="
            border-radius: 4px;
            border: 1px solid #c1c2c3;
            width: 230px;
            height: 20px;
            margin-left: 300px;
          "
        />
      </div>
      <div style="margin-left: 25px; border-radius: 6px; width: 101px">
        <p class="type-nameM">全选 删除 </p>
      </div>
    </el-row>
  </div>
</template>

<script setup>
const playManagement = (item) => {
  if (item.name === "歌曲") {
    alert(item.name);
  } else if (item.name === "艺人") {
    alert(item.name);
  } else if (item.name === "专辑") {
    alert(item.name);
  } else if (item.name === "类别") {
    alert(item.name);
  } else if (item.name === "用户") {
    alert(item.name);
  }
};

const BoxTitle = [
  {
    id: 1,
    name: "歌曲",
    img: "",
  },
  {
    id: 2,
    name: "艺人",
    img: "",
  },
  {
    id: 3,
    name: "专辑",
    img: "",
  },
  {
    id: 4,
    name: "类别",
    img: "",
  },
  {
    id: 5,
    name: "用户",
    img: "",
  },
];
</script>

<style lang="scss">
.type-loc1M {
  // background-color: #990033;
  // box-shadow: 0px 5px 8px 0px rgba(0, 0, 0, 0.121);
  width: 80px;
  height: 25px;
  border-radius: 0px;
  transition: all 1.5s ease;
  cursor: pointer;
}
.type-loc1M:hover {
  transition: 1s;
  animation: shake 0.8s ease-in-out;
  border-radius: 5px;
  width: 80px;
  height: 25px;
  background-color: #2563eb;
}

.type-nameM {
  text-align: center;
  font-size: 15px;
  // font-weight: bold;
  width: 100%;
  height: 100%;
  padding-top: 2px;
  color: #1f2937;
}

.type-loc1M:hover .type-nameM {
  color: white;
}

@keyframes shake {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-1px);
  }
  75% {
    transform: translateX(1px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
