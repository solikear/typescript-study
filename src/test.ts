/*
 * @Author: your name
 * @Date: 2020-09-14 09:18:44
 * @LastEditTime: 2020-09-16 08:47:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \typescript\src\test.ts
 */
let myName:string = 'deer404';
console.log(`My name is ${myName}`);
// myName = 1000 //编译错误 类型不匹配
let myAge:number = 18
console.log(`My age is ${myAge}`);

let isMale:boolean = true;

// 任意值（Any）用来表示允许赋值为任意类型。
// 让编译器忽略类型检查
let test:any;
test = 1;
test ='anyScript';
console.log(test);


// let var

if(true){
    var t:string="11"
    // let a:string="22"
}
console.log(t);
// console.log(a);

const ip:string = '192.168.1.10'

