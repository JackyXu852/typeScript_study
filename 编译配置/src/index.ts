/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-10 15:06:42
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-10 16:53:22
 */

// import {hi} from './app.js'
let aaa:number;
aaa = 1;
aaa = 2;
aaa = 8;
aaa = 124;

// function fn(a,b){ //a,b为隐式的any类型
//     return a+b
// }
function fn(a:number,b:number){ //a,b为隐式的any类型
    return a+b
}
// function fn2(){ //存在隐式this
//     alert(this)
// }
// function fn2(this:Window){
//     alert(this)
// }
function fn2(this:any){
    alert(this)
}

let dom1 =document.getElementById("box1")
// dom1.addEventListener("click",()=>{
//     alert("dom")
// })
dom1?.addEventListener("click",()=>{
    alert("dom")
})

// 你好注释----------------