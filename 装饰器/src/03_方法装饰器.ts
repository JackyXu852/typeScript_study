(function(){
/* 方法装饰器
    它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
    方法装饰会在运行时传入下列3个参数:
    1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
    2、成员的名字。
    3、成员的属性描述符。

*/
/* 方法装饰器一 :扩展当前属性和方法 */
// function get(params:any){

//     return function(target:any,methodName:any,desc:any){
//         console.log(params) //传入的参数
//         console.log(target) //当前类
//         console.log(methodName) //当前方法名
//         console.log(desc) //当前方法描述

//         target.apiUrl = params

//         target.run = function(){
//             console.log('run')
//         }



//     }
// }


// class httpClient{
//     apiUrl:string | undefined;
//     constructor(){
//     }
//     @get('www.baidu.com')
//     getData(){
//         console.log(this.apiUrl)
//     }
// }

// let http:any = new httpClient()

// http.run()


/* 方法装饰器二 ：修改方法*/
function get(params:any){

    return function(target:any,methodName:any,desc:any){
        // 修改装饰器的方法把装饰器方法里面传入的所有参数改为string类型

        // 1.保存当前方法

        var oMethod = desc.value;//当前getData方法
        desc.value = function(...args:any[]){
            args = args.map((value)=>{

                return String(value)

            })            

            console.log(args)
            console.log('方法装饰器！！')
            oMethod.apply(this,args)//修改当前方法

        }




    }
}


class httpClient{
    apiUrl:string | undefined;
    constructor(){
    }
    @get('www.baidu.com')
    getData(...args:any[]){
        console.log('我是getData里面的方法',args)
    }
}

let http:any = new httpClient()

http.getData(123,true,'xxx')
})()