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
	//Dog继承Animal
	//Dog是子类 Animal是父类
	//子类将拥有父类所有的属性和方法
	//继承就是提取公共类(提取类的公共部分) 相当于子类复制粘贴父类的代码到子类里
	//子类可以添加自己的方法
	//当子类的方法和父类的方法相同时，子类会重写父类的方法
	class Dog extends Animal{

		// xx: string;

		// constructor(xx:string){
		// 	this.xx = xx

		// }

		run(){
			console.log(`${this.name}在跑`)
		}
		bark(){
			console.log(this, this.name,'汪汪')
		}

	}
	class Cat extends Animal {

	}

	const dog1 = new Dog('旺财',3)
	const cat1 = new Cat('咪咪',4)

	dog1.bark()
	dog1.run()
	cat1.bark()

})()