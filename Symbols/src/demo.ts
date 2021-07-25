/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-25 16:58:42
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-25 17:45:24
 */

// 自ECMAScript 2015起，symbol成为了一种新的原生类型，就像number和string一样。
const sym = Symbol();
const sym1 = Symbol('key');
const sym2 = Symbol('key');

let obj = {
    [sym]: "value",
    [sym1]:123,

};

console.log(obj[sym],obj[sym1],sym2); // "value"

// Symbols也可以与计算出的属性名声明相结合来声明对象的属性和类成员。

const getClassNameSymbol = Symbol();

class C {
    [getClassNameSymbol](){
       return "C";
    }
}

let c = new C();
let className = c[getClassNameSymbol](); // "C"

console.log('className',className)