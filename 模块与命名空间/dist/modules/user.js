/*
 * @Descripttion: file content
 * @version:
 * @Author: Olivia
 * @Date: 2021-07-26 19:02:22
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-26 19:38:11
 */
import { MySqlDb } from '../db';
//定义数据库的映射
class userClass {
}
const u = new userClass();
u.username = '小红';
u.password = '123456';
var userModule = new MySqlDb();
userModule.add(u);
// export {
//     userClass,
//     userModule,
// }
