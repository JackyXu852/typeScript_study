(function () {
	class Animal {
				// 实例属性
				name: string;				

				constructor(name: string) {
		
					this.name = name	
		
				}
				//动物叫
				bark() {
					console.log(this, this.name, '动物叫')
		
				}

	}

	class Dog extends Animal{
		age: number;

		constructor(name:string,age: number) {
			//如果子类写了构造函数 相当于把父类的构造函数给覆盖掉了
			//所以子类构造函数 必须调父类构造函数,并且父类的参数 必须通过子类调用super传入进来
			//调用super() 就是调用父类的构造函数
			super(name)
			this.age = age	

		}

		bark(){
			//在类的方法中，super表示父类
			// super.bark()//打印 动物叫
			console.log(this, this.name,'汪汪')
		}

	}

	const dog1 = new Dog('旺财',3)

	dog1.bark()



})()