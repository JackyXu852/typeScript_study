(function(){
/* 
    装饰器执行顺序
    属性>方法参数>方法>类 ===>我运行的结果

    属性>方法>方法参数>类 ===>网上的人运行的结果

    如果有多个同样的装饰器，它会先执行后面的装饰器。
*/
function logClass1(parmas:any){
    console.log('类装饰器1')
}
function logClass2(parmas:any){

    return function(target:any){
        console.log('类装饰器2')
    }
    
}
function logProperty1(params?:any){
    return function (target:any,attr:any){
        
        console.log('属性装饰器1')
    }
}
function logProperty2(params?:any){
    return function (target:any,attr:any){
        
        console.log('属性装饰器2')
    }
}
function logMethods1(params:any){

    return function(target:any,methodName:any,desc:any){
        console.log('方法装饰器1')
    }
}
function logMethods2(params:any){

    return function(target:any,methodName:any,desc:any){
        console.log('方法装饰器2')
    }
}
function logParams1(params:any){

    return function(target:any,methodName:any,paramsIndex:any){
        console.log('参数装饰器1')
    }
}
function logParams2(params:any){

    return function(target:any,methodName:any,paramsIndex:any){
        console.log('参数装饰器2')
    }
}


@logClass1
@logClass2('we')
class httpClient{
    @logProperty1()
    @logProperty2()
    apiUrl:string | undefined;
    constructor(){
    }
    @logMethods1('方法装饰1')
    @logMethods2('方法装饰2')
    getData(@logParams1('xxx') uuid:any,@logParams2('yyy') age:number){
    }
}

let http:any = new httpClient()
http.getData()

})()