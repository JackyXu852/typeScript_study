(function () {

	/*

	泛型:软件工程中，我们不仅要创建一致的定义良好的API，同时也要考虑可重用性。组件不仅能够支持当前的数据类
	型，同时也能支持未来的数据类型，这在创建大型系统时为你提供了十分灵活的功能。
	在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种类型的数据。这样用户就可以
	以自己的数据类型来使用组件。
	通俗理解:泛型就是解决类接口方法的复用性、以及对不特定数据类型的支持

	***** 泛型:可以支持不特定的数据类型 要求:传入的参数和返回的参数一致
	T表示泛型，具体什么类型是调用这个方法的时候决定的


	* */



	function fn<T>(a:T):T{ //泛型可以随便定义 T,X,K...
		return a
	}
	const n1 = fn(10) //不指定泛型，TS可以自动对类型进行推断
	const n2 = fn<number>(20)//指定泛型
	const n3 = fn<string>('hello')

	// console.log('n3',n3)

	// 指定多个泛型
	function fn2<T,K>(a:T,b:K):T{
		console.log(b)
		return a
	}

	// const m1 = fn2(30,'你好')
	// const m2 = fn2(40,520)

	// console.log("m1",m1)
	// console.log("m2",m2)

	//指定泛型包括的类型
	interface Inter {
		length:number;
	}
	
	// 泛型T继承Inter 表示泛型T 包含Inter（是泛型T的子类）
	function fn3<T extends Inter>(a:T):number{

		return a.length

	}

	const a1 = fn3('hello')
	// const a2 = fn3(10) //报错 数字没有length属性
	// const a3 = fn3({name:10}) //报错 该对象没有length属性
	// const a4 = fn3({length:"123"}) //报错 length的值类型错误 应该是number类型
	const a5 = fn3({length:10})
	const a6 = fn3({length:12,name:'张三'})

	console.log('a1',a1)
	console.log('a5',a5)
	console.log('a6',a6)

	/* 同样的 class也是相同的用法 */

	/*泛型类:比如有个最小堆算法，需要同时支持返回数字和字符串两种类型。通过类的泛型来实现*/

	class MyClass<T> {

		name:T;
		constructor(name:T){

			this.name = name

		}

	}

	const my = new MyClass('张三')
	const my2 = new MyClass<string>('李四')

	console.log('my.name',my.name)
	console.log('my2.name',my2.name)









})()