/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-10 14:42:57
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-10 14:52:25
 */
//====================================【高级类型】============================================
// 1.交叉类型 & ---------------------------------------------------------------------------
//表示同时 与
let aa:{name:string} & {age:number}//表示aa这个值必须包含name和age ==>aa:a&b 表示aa既是a也是b
aa = {name:'张三',age:18}

// let ab:<>

// 2.类型别名 type------------------------------------------------------------------------
type myType = 0|1|2|3|4|5;

let a1:myType;
let a2:myType;
let a3:string;
a1 = 1;
a2 = 3;
a3 = '123dsf';

