import Mock from "mockjs";
var Random = Mock.Random;
// api/slider
Mock.mock(/\/api\/slider/, "get", (options) => {
  debugger
  return [{
    id:1,
    url:'https://www.runoob.com/images/pulpit.jpg'
  },{
    id:2,
    url:'https://www.runoob.com/images/pulpit.jpg'
  },{
    id:3,
    url:'https://www.runoob.com/images/pulpit.jpg'
  },{
    id:4,
    url:'https://www.runoob.com/images/pulpit.jpg'
  }];
});
