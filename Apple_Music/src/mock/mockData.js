import Mock from "mockjs";
import data from "../data/musicData.json";
import MusicDB from "../data/MusicDB.json"; // 引入用户数据

// 模拟登录接口
Mock.mock("/api/login", "post", (options) => {
  const { uname, upw } = JSON.parse(options.body);
  // 查找用户
  // const user = data.find(user => user.uname === uname && user.upw === upw)
  const user = MusicDB.userData.find(
    (user) => user.uname === uname && user.upw === upw
  );
  if (user) {
    return {
      code: 200,
      message: "登录成功",
      data: {
        token: `token_${user.id}`,
        user,
      },
    };
  } else {
    return {
      code: 401,
      message: "用户名或密码错误",
    };
  }
});

// 模拟注册接口
Mock.mock("/api/register", "post", (options) => {
  const { uname, upw } = JSON.parse(options.body);
  // 检查用户名是否已存在
  const userExists = MusicDB.userData.some((user) => user.uname === uname);
  if (userExists) {
    // 用户名已存在
    return {
      code: 400,
      message: "用户名已存在",
    };
  } else {
    // 用户名不存在，注册新用户
    const newUser = {
      id: MusicDB.userData.length + 1, // 新用户的ID
      uname,
      upw,
    };

    // 将新用户添加到模拟的用户数据中
    MusicDB.userData.push(newUser);

    return {
      code: 200,
      message: "注册成功",
      data: newUser,
    };
  }
});

Mock.mock("/api/MusicDB", "get", {
  code: 200,
  message: "请求成功",
  data: MusicDB,
});
Mock.mock("/api/user", "get", {
  code: 200,
  message: "请求成功",
  data: data,
});

export default Mock;
