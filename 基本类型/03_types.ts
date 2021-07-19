/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-05 17:03:40
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-19 13:51:55
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

// 6.void---------------------------------------------------------------------------------------
// void 表示空值 无返回值 它表示没有任何类型
function fn():void{

    // return 123 报错 

    // return null;
    // return undefined;
    // return
    
}
// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined;

// 7.never------------------------------------------------------------------------------------------
// 表示无值 表示的是那些永不存在的值的类型 函数报错就会立即停止执行 不会有返回值
function fn1():never{

    throw new Error('报错了');
}

// 8.object--------------------------------------------------------------------------------------------
//object表示一个js对象
let xx:object;
xx = {}
xx = function(){}

//用{}指定对象内包含哪些属性
//语法：{属性名:属性值,属性名:属性值}
//{}内定义了哪些属性，赋值时就必须有哪些属性，但是属性名后面加上? 表示该属性是可选的
let a : {name: string,age?:number};

a = {name:'张三',age:18}

a = {name:'李四'}
//[myPropName:string]:any 表示可以添加任意个属性，这里的属性名设置为string类型了
let b:{name: string,[myPropName:string]:any};

b = {name:'张三',a:12,b:'xx',c:true}

//设置函数结构的类型声明
//语法：(形参：类型,形参：类型)=>返回值类型
let c:(a: number,b: number)=>number;

// c = function(n1,n2,n3){ //报错 多了一个参数
//     return n1 + n2
// }

// c = function(n1:number,n2:number,n3:number):number{ //报错 多了一个参数
//     return n1 + n2
// }

// c = function(n1,n2,n3){ //报错 多了一个参数
//     return n1 + n2
// }

// 9.数组---------------------------------------------------------------------------
// 数组声明 1.类型[] 2.Array<类型>
let arr1: string[];
arr1 = ['1','w','r']

let arr2: number[];
arr2 = [1,2,2]

let arr3:Array<number>;//数组泛型
arr3 = [1,2,3]

let arr4:Array<any>; //不推荐
arr4 = [1,'2',true]

// 10.元组 Tuple--------------------------------------------------------------------
//元组就是固定长度的数组 类型必须一一对应
//语法：[类型,类型]
let h:[string,number,string];
h = ['we',2,'1']

// 11.枚举 enum---------------------------------------------------------------------
enum Gender{
    Male = 1,
    FeMale = 0,    
}

let person:{name:string,gender:Gender}
person = {
    name:'张三',
    gender:Gender.Male
}
console.log('判断张三是不是男的',person.gender === Gender.Male)