/*
var http = require("http");
var server = http.createServer();
server.on("request",function(req,res){
    res.end();
});
server.listen(9000);
*/
// 导入koa，和koa 1.x不同，在koa2中，我们导入的是一个class，因此用大写的Koa表示:
const Koa = require('koa');

// 创建一个Koa对象表示web app本身:
const app = new Koa();

const path = require('path');
const mime = require('mime');
const fs = require('mz/fs');

// 对于任何请求，app将调用该异步函数处理请求：
app.use(async (ctx, next) => {
    const start = new Date().getTime(); // 当前时间
    await next(); // 调用下一个middleware
    const ms = new Date().getTime() - start; // 耗费时间
    // console.log(`Time: ${ms}ms`); // 打印耗费时间
});

// app.use(async (ctx, next) => {   
    // ctx.response.type = 'text/html';
    // ctx.response.body = '<h1>Hello, koa2!</h1>';
    // console.log(path);
    // ctx.response.body = fs.readFileSync(path.resolve(__dirname, '../template.html'));
// });

let staticFiles = require('./static-files');
app.use(staticFiles('/staticfile/', __dirname+'/../'));

// 在端口9000监听:
app.listen(9000);
console.log('app started at port 9000...');