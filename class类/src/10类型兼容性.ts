(function () {
	/* 
		TypeScript里的类型兼容性是基于【结构子类型】的。
		结构类型是一种只使用其成员来描述类型的方式。 
		它正好与名义（nominal）类型形成对比。
		（译者注：
		在基于【名义类型】的类型系统中，数据类型的兼容性或等价性是通过明确的声明和/或类型的名称来决定的。
		这与【结构性类型】系统不同，它是基于类型的组成结构，且不要求明确地声明。） 
	*/
	interface Named {
		name: string;
		age:number;
	}
	
	class Person {
		name: string;
		age:number;
		constructor(name: string,age:number){
			this.name = name
			this.age = age
		}
	}
	
	let p: Named;
	// OK, because of structural typing
	p = new Person('张三',20);


	// typeScript结构化类型系统的基本规则是，如果x要兼容y，那么y至少具有与x相同的属性---------------------------------

	interface Aged {
		age: number;
	}
	
	let x: Aged;
	let y = { name: 'Alice', age:18, location: 'Seattle' };
	x = y;

	// console.log('x',x,'y',y)


	//函数类型检查

	function greet(n: Named) {
		console.log('Hello, ' + n.name,n.age);
	}
	greet(y); // OK y里面多了location,但是不会报错，n只会检查包含包Named的属性的成员


	
})()