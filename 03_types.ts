/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-05 17:03:40
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-06 11:26:56
 */

// 1.字面量-------------------------------------------------------------------------------------------------------------------
let q:10; //只能将q赋值为10 否则将报错
q = 10 
// q = 11 //报错

// 2.联合类型 -------------------------------------------------------------------------------------------------------------
//使用 | 进行多个类型选择
let w: 'male' | 'female' | 'other' //只能赋值这些数据
w = 'male'
w = 'female'
w = 'other'
// w = 'ddsfd' //报错

let e: boolean | string; //只能赋值这些类型的数据
e = true
e = 'hello'
// e = 1 报错

// 3.any----------------------------------------------------------------------------------------------------------------
//不指定数据类型 可以为任意类型 和js一样 关闭了ts的类型检测
let r: any; //除非万不得已 不建议使用
// let r; //除非万不得已 不建议使用
r = 'hello'
r = true
r = 10

// 4.unknown---------------------------------------------------------------------------------------------------------
//不指定数据类型 可以为任意类型 和js一样 关闭了ts的类型检测
let t:unknown;
t = 10
t = true

//any 和 unknown 的区别 
// e = r //any 不仅可以改变自己的数据类型 赋值给其他已经明确类型的变量后 那个变量的类型也会改变 （霍霍自己 也霍霍别人）
// e = t //unknown 只能改变自己的数据类型 赋值给其他已经明确类型的变量后 如果赋值的类型一定要一致，否则报错 （只能霍霍自己）

// t = r //any 和 unknown 可互相赋值
// r = t

// 5.类型断言 -------------------------------------------------------------------------------------------------------------------------------------
//解释：类型断言是类型选择，而不是类型转换！！  意思为 当值的类型为string时，才执行（并不是将值强制转化为string）
// e = t as string  方式一 推荐
// e = <string> t   方式二

// 等价于
if(typeof t === 'string'){
    e = t
}

function getLength(num:number | string):number{

    // num.length //会报错 因为length只是string的属性 并不是number和string的公有属性 编译器不能判断在ts中该值为什么类型 

    if((num as string).length){
        console.log('(num as string).length')
        return (num as string).length
    }else{
        console.log('num.toString().length')
        return num.toString().length
    }   

}
// console.log('getLength(1234)',getLength(1234))
// console.log('getLength("qw")',getLength("qw"))
