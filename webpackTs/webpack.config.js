/*
 * @Descripttion: file content
 * @version: 
 * @Author: Olivia
 * @Date: 2021-07-19 10:14:26
 * @LastEditors: Olivia
 * @LastEditTime: 2021-07-19 16:35:17
 */
const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	mode:"development",
	entry: "./src/index.ts",
	output: {
		filename: 'static/js/[name].[hash:7].js',
		path: path.resolve(__dirname, 'dist'),
	},
	resolve: {
    extensions: ['.js', '.jsx', '.vue', '.json','.ts'],//能够使用户在引入模块时不带扩展
	},
	module:{
		rules:[
			{
				test:/\.ts$/,
				//接收loader加载器 从下往上执行
				use:[
					{
						//指定加载器
						loader:"babel-loader",
						// 设置加载器
						options:{
							//加载器预设
							presets:[
								[
									//指定环境插件
									"@babel/preset-env",//相当于 ES2015 ，ES2016 ，ES2017 及最新版本这样的高级语法 转化为浏览器兼容的低级语法
									//配置信息
									{
										//指定浏览器兼容的范围
										// targets:{
										// 	"chrome":"58",	
										// 	"ie":"11",										
										// },
										//指定corejs版本
										"corejs": 3,
										//使用corejs的方式
										"useBuiltIns": "usage",//按需加载
										// "useBuiltIns": "entry",
									}
								]
							],

						},
					},
					"ts-loader"
				],
				exclude:/node_modules/
			},
		]
	},
	plugins:[		
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			template: 'src/index.html', //输入文件
      filename: 'index.html', //output path中的输出位置
		}),
		
	],
	devServer:{		
		contentBase: path.resolve(__dirname, "./dist/"),//告诉服务器从哪里提供内容
		host: "0.0.0.0",
    //启动gzip压缩
    compress: true,
    //端口号
    port: 3030,
    //自动打开浏览器
    open:true,
	},

}