// 3 từ khoá var, let, const
//VAR
// phạm vi (toàn cục và cục bộ)
"hosting";
// var a; chạy ngầm
// var a = 4;

// function test() {
//   a = 5;
//   console.log("inside function scope", a);
// }
// test();
// console.log("outside function scope", a);

// 2015 -> now
// meta của ae dev Jsa

// console.log(a);
// let a = 4;
// console.log(a);

// const b=78687687
// let x = 30;
// let y = 20;

// console.log(x + y - "30");

let a = 2;
let b = a++;
let c = ++a;

console.log(a, b, c);
a++:
b1:truy xuất giá trị của  a
b2:a =a+1
// dong1 a = 2
// dong2 b = a
//a =a+1<==>a++
// b=2, a vừa được cập nhật lại =3
++a:
b1:a = a+1
b2:truy xuất giá trị của a
// dòng3 c=a=3+1=4

// a =4

(function sum(a,b){
    console.log('hello world')
})(2,4)


function sum(a, b){
    return a+b
}

sum(2,4)