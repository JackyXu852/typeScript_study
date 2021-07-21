(function () {



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