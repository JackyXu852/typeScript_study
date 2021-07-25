/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-20 15:21:25
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-23 17:35:02
 */
(function () {

	// 类型别名 关键字type
	//描述一个对象的结构
	type myType = {
		name:string,
		age:number,
	}

	let person1:myType = {
		name:'张三',
		age:18,
	}

	//接口 关键字interface
	//接口和类型别名很像，接口是描述一个类的结构,用来定义类里面有哪些属性和方法
	//同时接口也可以被当成类型声明去使用（同类型别名）
	interface myInterface {
		name:string;
		age:number;
	}

	interface myInterface {
		gender:string;
	}

	let obj:myInterface = {
		name:'小红',
		age:20,
		gender:'男'
	}

	/**
	 * 接口在定义类的时候，去限制类的结构，接口就是类的规范
	 * 接口中所有的属性都不能有实际的值
	 * 接口只考虑对象结构，不考虑实际值
	 * 所有的方法都是抽象方法
	 * */
	interface myInter{
		name:string,
		sayHello():void;
	}

/**
 * 定义类时，可以去实现这个接口
 * 实现接口，关键字implements，就是使类满足接口的要求 
 * 
 * */ 

class MyClass implements myInter {
	name:string;

	constructor(name:string){

		this.name = name

	}
	sayHello(){

	}
}



})()