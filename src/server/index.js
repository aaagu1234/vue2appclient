var express = require("express");
var app = express();

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

let slider = {
  code: 200,
  data: [
    {
      id: 1,
      url: "http://www.javascriptpeixun.cn/files/system/2018/09-18/111926eb7fd8309596.png?version=8.3.6",
    },
    {
      id: 2,
      url: "http://www.javascriptpeixun.cn/files/system/2018/09-18/111926eb7fd8309596.png?version=8.3.6",
    },
    {
      id: 3,
      url: "http://www.javascriptpeixun.cn/files/system/2018/09-18/111926eb7fd8309596.png?version=8.3.6",
    },
  ],
};

let userInfo = {
  code: 200,
  data: {
    username: "guhj",
    hasPermission: true, // 登录之后 - 权限
    token: "token123456", // jwt 的方式
    authList: [
      { auth: "lesson", name: "课程管理", path: "/profile/lesson-manager" },
      { auth: "student", name: "学员管理", path: "/profile/student-manager" },
      { auth: "points", name: "积分查看", path: "/profile/points" },
      { auth: "collect", name: "收藏列表", path: "/profile/collect" }
    ], // 登陆后 =》  菜单权限列表
    menuPermission: true,
    btnPermission: ["edit"], // 权限列表
  },
};

app.get("/", function (req, res) {
  res.send(user);
});

app.get("/user/validate", function (req, res) {
  res.send(userInfo);
})

app.post("/user/login", function (req, res) {
  console.log(req.body)
  
  res.send(userInfo);
});

app.get("/api/slider", function (req, res) {
  res.send(slider);
});

var server = app.listen(7001, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://%s:%s", host, port);
});
