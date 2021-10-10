interface DBI<T>{
    add(info:T):boolean;
    update(info:T,id:number):boolean;
    delete(id:number):boolean;
    get(id:number):any[]
}


// 定义一个操作mysql数据库的类  注意：要实现一个泛型接口 一个类也应该是一个泛型类
export class MySqlDb<T> implements DBI<T>{

    constructor(){
        console.log('数据库连接建立')
    }

    add(info:T):boolean{
        console.log('add',info)

        return true
    }
    update(info:T,id:number):boolean{
        console.log('update',info,id)

        return true

    }

    delete(id:number):boolean{

        console.log('delete',id)

        return true
    }

    get(id:number):any[]{

        return [
            {
                name:'张三',
                age:24,
            },
            {
                name:'李四',
                age:23,
            },
        ]

    }

}