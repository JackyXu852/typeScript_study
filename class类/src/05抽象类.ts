(function () {
	//以abstract开头的类是抽象类
	//抽象类和一般的类区别不大，只是不能用于实例化创建对象
	//抽象类只能被继承
	//抽象类可以添加抽象方法
	abstract class Animal {
				// 实例属性
				name: string;				

				constructor(name: string) {
		
					this.name = name	
		
				}
				//动物叫
				//定义一个抽象方法
				//抽象方法以abstract开头，没有方法体，无返回值
				//抽象方法只能定义在抽象类中，子类必须对抽象方法进行重写
				abstract bark():void

	}

	class Dog extends Animal{
		age: number;

		constructor(name:string,age: number) {
			super(name)
			this.age = age	

		}

		bark(){
			console.log(this,this.name,'汪汪')
		}

	}

	class Cat extends Animal{
		bark(){
			console.log(this,this.name,'喵喵')
		}
	}

	const dog1 = new Dog('旺财',3)
	const cat1= new Cat('咪咪')

	dog1.bark()

	cat1.bark()



})()