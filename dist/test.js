"use strict";
var myName = 'deer404';
console.log("My name is " + myName);
// myName = 1000 //编译错误 类型不匹配
var myAge = 18;
console.log("My age is " + myAge);
var isMale = true;
// 任意值（Any）用来表示允许赋值为任意类型。
// 让编译器忽略类型检查
var test;
test = 1;
test = 'anyScript';
console.log(test);
// let var
if (true) {
    var t = "11";
    // let a:string="22"
}
console.log(t);
// console.log(a);
