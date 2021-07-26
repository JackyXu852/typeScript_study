(function(){
/* 属性装饰器
    属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数:

    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。

    2、成员的名字。 
*/

/* 类装饰器 */
function DHttp(params:any){

    console.log('我是传进来的params',params)

    return function (target:any){
        console.log('DHttp=>target',target)
    }
}

/* 属性装饰器 */
function logProperty(params:any){
    return function (target:any,attr:any){
        
        target[attr] = params

        console.log('logProperty=>target',target)
        console.log('logProperty=>attr',attr)
    }
}

@DHttp('xxx')
class httpClient{
    @logProperty('www.baidu.com')
    apiUrl:string;
    constructor(){
        this.apiUrl = '我是构造函数里的apiUrl'
    }

    getData(){
        console.log(this.apiUrl)
    }
}

let http:any = new httpClient()

// http.getData()


})()