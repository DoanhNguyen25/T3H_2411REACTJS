// function : hàm thực và hàm trả về
// * hàm thực thi
// function helloWorld() {
//   console.log("xin chào");
//   console.log("bạn có khoẻ không");
//   ádfjasdjf
//   if()
// }

// * hàm trả về
// let a = 3;
// let b = 4;
// function sum() {
//   return a + b;
// }

// tham số truyền vào
// splice(1,9,9)
// function spliceCustom(startIndex, deleteCount, endIndex,item1,item2){
// // có thể thực thi or có thể trả về
// }

// splice(1,2,2,3,5)
// set default value for argument
function sum(a = 'hihii', b = 1) {
  return a + b;
}

let getSum = sum(3, 3);
console.log(getSum);


