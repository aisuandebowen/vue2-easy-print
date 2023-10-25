/*
 * @Author: cbw
 * @Date: 2023-10-25 19:07:49
 * @LastEditors: cbw
 * @LastEditTime: 2023-10-25 19:09:56
 * @Description:
 */
// 引入nodejs path 包
const { resolve } = require("path");

module.exports = {
  // 入口文件
  entry: "./vue2-easy-print/index.js",
  // 输出打包文件配置
  output: {
    // 输出文件名称
    filename: "vue2-easy-print.js",
    // 输出文件目录
    path: resolve(__dirname, "dist"),
    // 导出全局变量
    library: "print",
    // 导出模块化 'umd' 支持 'amd' 或 'cmd'规范
    libraryTarget: "umd",
    // 处理browser或者node环境
    globalObject: "this",
  },
  // 排除在打包外。（注意：在引入包时，需要用户再单独下载包）
  externals: {},
  // 打包环境
  mode: "production",
  // 开启source-map 方便生成调试。
  devtool: "source-map",
};
