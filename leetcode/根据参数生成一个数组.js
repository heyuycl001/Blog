// 根据参数生成一个数组
//     数组长度 = length
//     数组中每项的值 = 随机整数 & 范围 [min, max) & 不重复
// 如: getList(3, 10, 5) =>  [3, 9, 8, 6, 7]

// getList = function (min, max, length) {
//   // let arr = [3, 4, 5, 6, 7, 8, 9, 10];
//   let flag = min;
//   let arr = new Array(max - min + 1).fill(0).map(_ => flag++);
//   result = [];
//   for (let i = 0; i < length; i++) {
//     let index = parseInt(Math.random() * (max - min + 1));
//     result.push(arr[index]);
//     arr.splice(index, 1);
//     max--;
//   }
//   console.log(result);
//   return result;
// };

var getList = function (min, max, length) {
  var result = [];
  for (var i = 0; i < length; i++) {
    var item = parseInt(Math.random() * (max - min + 1) + min, 10);
    if (result.indexOf(item) == -1) {
      result.push(item);
    } else {
      return getList(min, max, length);
    }
  }
  if (result.length == length) {
    console.log(result);
    return result;
  }
};

getList(3, 10, 5);
