/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-23 15:31:14
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-23 16:00:53
 */
(function () {
	class Animal {
		// 实例属性
		name: string;
		age: number;

		constructor(name: string, age: number) {

			this.name = name
			this.age = age

		}
		//动物叫
		bark() {
			console.log(this, this.name, '动物叫')

		}

	}
	class Dog extends Animal{

		run(){
			console.log(`${this.name}在跑`)
		}
		bark(){
			console.log(this, this.name,'汪汪')
		}

	}
	class Cat extends Animal {

	}

	// 最佳通用类型 
	/* 
		当需要从几个表达式中推断类型时候，会使用这些表达式的类型来推断出一个最合适的通用类型
	*/
	
	// let zoo:Animal[] = [new Dog('旺财',2),new Cat('咪咪',3)] //zoo将会被推断为Animal[]类型
	let zoo = [new Dog('旺财',2),new Cat('咪咪',3)] //zoo将自动被推断为(Dog | Cat)[]类型
	let x = [0, 1, null];//x将自动被推断为(number | null)[]类型

	// window.onmousedown = function(mouseEvent) {
	// 	console.log(mouseEvent.button);  //<- Error
	// };
	window.onmousedown = function(mouseEvent: any) {
		console.log(mouseEvent.button);  //<- Now, no error is given
	};

})()