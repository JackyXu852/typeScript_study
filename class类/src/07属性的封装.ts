
(function () {
	class Person {
		/**
		 * 可以在属性前添加修饰符
		 * pubulic 修饰的属性可以在任意位置访问（修改）属性默认值pubulic
		 * 
		 * private 私有属性 只能在当前类的内部访问（修改）不能被继承 因此子类不能访问 
		 * 				 安全性更高 且权限掌握在开发者手中
		 * 				 可以通过在类中添加方法，使得私有属性可以被访问和修改
		 *         可以通过get和set方法获取和设置私有属性         
		 * 
		 * protected 保护属性 只能在当前类及当前子类中访问（修改） 不能被外界使用
		 * 
		 */
		

		name: string;
		private _age: number;
		// private age: number;
		protected color:string;

		constructor(name: string, age: number,color:string) {
			this.name = name;
			this._age = age
			// this.age = age
			this.color = color

		}

		// //定义方法来获取私有属性
		// getAge(){
		// 	return this.age
		// }
		// //定义方法来设置私有属性
		// setAge(value:number){
		// 	if(value >= 0){
		// 		this.age = value
		// 	}
			
		// }

		get age(){
			console.log('获取了age')
			return this._age
		}

		set age(value:number){
			console.log('设置了age')
			if(value >= 0){
				this._age = value
			}
		}
	}

	class Woman extends Person{

		test(){
			console.log(this.color)
		}

	}

	const per1 = new Person('张三', 24,'yellow')

	per1.age = 33

	// per1.setAge(33)

	// console.log('per1', per1,per1.getAge())
	// console.log('per1', per1,per1.age)

	const woman1 = new Woman('小红',23,'yellow')

	woman1.test()
	// woman1.color = 'red' //报错 protected只能在类里面访问 不能在外面访问（修改）

	// console.log('woman1',woman1)


/* 	class C {
		name:string;
		age:number;
		constructor(name:string,age:number){
			this.name = name
			this.age = age		

		}
	}
 */
	// 等价于
	class C {
		constructor(public name:string,public age:number){

		}
	}

	const c = new C('小明',22)

	console.log('c',c)






})()