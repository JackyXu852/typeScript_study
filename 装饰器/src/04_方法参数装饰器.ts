(function(){
/* 方法参数装饰器
    参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据, 传入下列3个参数:
    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2、参数的名字。
    3、参数在函数参数列表中的索引。


*/
function logParams(params:any){

    return function(target:any,methodName:any,paramsIndex:any){
        console.log(params)
        console.log(target)
        console.log(methodName)
        console.log(paramsIndex)

        target.url = 'www.baidu.com'

    }
}


class httpClient{
    apiUrl:string | undefined;
    constructor(){
    }
    getData(@logParams('xxx') uuid:any){
        console.log('我是getData里面的方法',uuid)
    }
}

let http:any = new httpClient()

http.getData(12345)
console.log(http.url)
})()