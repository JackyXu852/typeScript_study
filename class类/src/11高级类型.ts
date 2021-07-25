/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-23 17:15:54
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-25 16:48:29
 */

(function () {
	/* 交叉类型 

		交叉类型是将多个类型合并为一个类型
	
	*/
	
// 	function extend<T, U>(first: T, second: U): T & U {
//     let result = <T & U>{};
//     for (let id in first) {
//         (<any>result)[id] = (<any>first)[id];
//     }
//     for (let id in second) {
//         // if (!result.hasOwnProperty(id)) {
//             (<any>result)[id] = (<any>second)[id];
//         // }
//     }
//     return result;
// }
// class Person {
// 	constructor(public name: string) { }
// }
// interface Loggable {
// 	log(): void;
// }
// class ConsoleLogger implements Loggable {
// 	log() {
// 			// ...
// 	}
// }
// var jim = extend(new Person("Jim"), new ConsoleLogger());
// var n = jim.name;
// jim.log();

	
	/* 用户自定义的类型保护 */

	interface Bird {
		fly(): void;
		layEggs(): void;
	}

	interface Fish {
		swim(): void;
		layEggs(): void;
	}

	class PetFish implements Fish {
		swim() {
			// console.log('鱼游泳')
		}
		layEggs() {
			// console.log('鱼下蛋')
		}
	}
	class PetBird implements Bird {
		fly() {
			// console.log('鸟飞')
		}
		layEggs() {
			// console.log('鸟下蛋')
		}
	}

	function getSmallPet(): Fish | Bird {

		let pet = [new PetFish(), new PetBird]



		return pet[Math.floor(Math.random() * pet.length)]


	}

	let pet = getSmallPet();

	/* swim,fly访问会报错

	当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法：

	如果一个值的类型是 A | B，我们能够 确定的是它包含了 A 和 B中共有的成员=>layEggs 运行pet.layEggs不会报错
	但是我们不确定Fish | Bird类型是否有swim方法或者fly方法，所以运行pet.swim或pet.fly会报错

			if (pet.swim) {
					pet.swim();
			}
			else if (pet.fly) {
					pet.fly();
			}

			if(pet.layEggs){
					pet.layEggs();
			}
	*/

	/* 解决方案=>类型断言 */

	// console.log('(<Fish>pet).swim',(<Fish>pet).swim())
	// console.log('(<Bird>pet).fly',(<Bird>pet).fly())

	if ((<Fish>pet).swim) {
		//如果pet是鱼 (<Fish>pet).swim 判断就会返回swim函数 否则返回undefined
		(<Fish>pet).swim();

	}
	else {
		(<Bird>pet).fly();
	}

	// 用户自定义的类型保护
	/* TypeScript里的 类型保护机制让它成为了现实。 
	类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。 
	要定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个 类型谓词：
	*/
	function isFish(pet: Fish | Bird): pet is Fish {
		return (<Fish>pet).swim !== undefined;
	}

	if (isFish(pet)) {
    pet.swim();
	}
	else {
		pet.fly();
	}


	// 可选参数和可选属性
	/* 可选参数会被自动地加上 | undefined */
	function f(x: number, y?: number) {
		//所以x为number类型 y为number | undefined类型
    return x + (y || 0);
	}

	// console.log(f(1, 2))
	// console.log(f(1))
	// console.log(f(1, undefined))
	f(1, 2);
	f(1);
	f(1, undefined);
	// f(1, null); //报错y为number 或者 undefined类型


	// 可选属性也会有同样的处理：

	class C {
			a: number;
			b?: number;
			constructor(a:number,b?:number){
				this.a = a
				this.b = b
			}
	}

	const c = new C(1,6)
	c.a = 10
	// c.a = undefined; // error, 'undefined' is not assignable to 'number'
	c.b = 13;
	c.b = undefined; // ok

	// console.log(c)


	/* 如果编译器不能够去除 null或 undefined，你可以使用类型断言手动去除。 
	语法是添加 !后缀：
	 identifier!从 identifier的类型里去除了 null和 undefined： 
	*/

	function fixed(name: string | null): string {
		function postfix(epithet: string) {
			return name!.charAt(0) + '.  the ' + epithet; // ok
		}
		name = name || "Bob";
		return postfix("great");
	}

	const jackson = fixed(null)

	// console.log(jackson)

	
	/* 多态的 this类型 */
	// 它能很容易的表现连贯接口间的继承
	class BasicCalculator {
    public constructor(protected value: number = 0) { }
    public currentValue(): number {
        return this.value;
    }
    public add(operand: number): this {
        this.value += operand;
        return this;
    }
    public multiply(operand: number): this {
        this.value *= operand;
        return this;
    }
    // ... other operations go here ...
	}

	const getNumber = new BasicCalculator(10)
											.add(10)
											.multiply(10)
											.currentValue()

	// console.log('getNumber',getNumber)

	
	// 由于这个类使用了 this类型，你可以继承它，新的类可以直接使用之前的方法，不需要做任何的改变。
	class ScientificCalculator extends BasicCalculator {
    public constructor(value = 0) {
        super(value);
    }
    public sin() {
        this.value = Math.sin(this.value);
        return this;
    }
    // ... other operations go here ...
	}

	const number1 = new ScientificCalculator(50)
										.add(50)
										.multiply(10)
										.sin()
										.currentValue()										
										

	// console.log('number1',number1)

	//  索引类型查询和 索引访问操作符和 索引访问操作符
	/* 
	 索引类型查询:
	 意思就是对象是T类型 属性是K类型 而 对象中可能会有多种类型比如number|string
		keyof Person是意思就是 'name' | 'age' | 'weight' 类似联合类型 传入'name'或 'age' 或 'weight' 
		keyof可以遍历 T 中的所有属性名
	 
	 索引访问操作符
	 T[K]
	*/
	function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
		return names.map(n => o[n]);
	}
	function pluck1<T, K extends keyof T>(o: T, names: K): T[K] {
		return o[names]
	}
	
	interface Person {
			name: string;
			age: number;
			weight:number;
	}
	let person: Person = {
			name: 'Jarid',
			age: 35,
			weight:50,
	};
	let strings: number[] = pluck(person, ['age','weight']); // ok, string[]

	// console.log(pluck(person, ['age','weight','name']))
	// console.log(pluck1(person,'name'))


	// 字符串索引签名 ?
	interface Map<T> {
    [key: string]: T;
	}
	let keys: keyof Map<number>; // string
	let value: Map<number>['foo']; // number







})()