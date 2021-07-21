// 使用class来定义一个类
// 对象中主要包含了两个部分：
//     1.属性 =>“数据” 如人的身高、体重、年龄
//     2.方法 =>“行为” 如吃饭、睡觉、奔跑、游泳

class Person {
	//定义实例属性 =>必须实例化对象后才能获取
	readonly name: string = '张三'; //属性前面加上readonly 只读属性
	age: number = 23;

	//静态属性/类属性 => 通过类获取 属性前面加一个static则是静态属性
	static weight: number = 120;
	static readonly blood: string = "A";

	// 实例方法 / 静态方法:方法名前加static
	sayHello() {
		console.log("hello 大家好")
	}


}

let per = new Person() //实例化

per.age = 24
// per.name = '张小川' //会报错

Person.weight = 125
// Person.blood = "B"//报错

console.log('per', per, per.name, Person.weight, Person.blood)


per.sayHello()

