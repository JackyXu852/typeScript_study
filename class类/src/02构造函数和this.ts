class Dog {
	// 实例属性
	name: string;
	age: number;

	// 构造函数会在创建对象时调用 所以实例化对象就是调用constructor构造函数
	constructor(name:string,age:number) {
		// 在实例方法中，this就是当前实例化的对象
		//在构造函数中，当前对象就是当前新建的那个对象
		//可以通过this向新建的对象中添加属性

		this.name = name
		this.age = age

	}

	//狗叫 实例方法
	bark(){
		//在方法中，this就是调用该方法的
		console.log(this,this.name,'汪汪')

	}
	//类方法/静态方法
	static jump(){

		// console.log('jump',this) //不指向实例对象，指向类

	}
}

const dog1 = new Dog('小白',3)
const dog2 = new Dog('小黑',4)

dog1.bark() //bark里面的this指向dog1
dog2.bark() //bark里面的this指向dog2
// Dog.jump()//不咋用静态方法