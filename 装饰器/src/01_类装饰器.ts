(function(){
 /* 
装饰器:装饰器是一种特殊类型的声明， 它能够被附加到类声明，方法，属性或参数上，可以修改类的行为。

通俗的讲装饰器就是一一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。

常见的装饰器有:类装饰器、属性装饰器、方法装饰器、参数装饰器

装饰器的写法:普通装饰器(无法传参)、装饰器工厂 (可传参) 

装饰器是过去几年中js最大的成就之一，已是Es7的标准特性之一
*/

// 类装饰器:类装饰器在类声明之前被声明(紧靠着类声明)。类装饰器应用于类构造函数，可以用来监视，修改或替换类定义。传入一个参数

/* 普通装饰器(无法传参) */
function Dperson(parmas:any){

    // console.log('parmas',parmas) //当前类
    parmas.prototype.name = '张三'
    parmas.prototype.run = function(){
        console.log('我是run方法')
    }

}
@Dperson
class Person{

    eat(){

    }
}

let per1:any = new Person()

// console.log(per1)
// per1.run()

/* 装饰器工厂 (可传参) */
function Danimal(parmas:any){
    console.log(parmas) //传入进来的参数

    return function(target:any){

        console.log(target)//当前类

        target.prototype.name = parmas

    }

}
@Danimal('旺财')
class Animal{

    eat(){

    }
}

// let dog:any = new Animal()

// console.log(dog.name)

/* 类装饰器 重载构造函数 

    下面是一个重载构造函数的例子。
    类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
    如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明。

*/
function DHttp(target:any){

    console.log('我是传进来的target',target)

    return class extends target{

        apiUrl:any = 'www.baidu.com'

        constructor(){
            super()
            this.apiUrl = '我是装饰器构造函数里的apiUrl'
        }
    


        getData(){
            this.apiUrl = this.apiUrl + '---'
            console.log('我是装饰器里的apiUrl',this.apiUrl)
        }


    }

}

@DHttp
class httpClient{
    apiUrl:string;
    constructor(){
        this.apiUrl = '我是构造函数里的apiUrl'
    }

    getData(){
        console.log(this.apiUrl)
    }
}

let http:any = new httpClient()

http.getData()


})()

