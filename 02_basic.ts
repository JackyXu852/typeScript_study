/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-05 16:42:23
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-05 17:02:30
 */
let a: number; 

a = 12;
// a = 'hello'; //只能赋值数字 否则报错

let b: Boolean = true

let c = true //声明后并赋值 自动会绑定类型 （不推荐）

function sum (a: number,b:number):number //返回值类型为number
{
    console.log(a+b)
    return a + b
}

sum(2,3)