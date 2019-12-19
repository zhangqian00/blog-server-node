const express = require('express');
const router = require('./router/router.js'); // 路由文件
// const cors = require('cors');
const app = express();

// app.use(cors({
//     origin:['http://localhost:8081'],
//     methods:['GET','POST'],
//     alloweHeaders:['Conten-Type', 'Authorization']
// }));
app.all('*',(req,res,next)=>{
	res.header("Access-Control-Allow-Origin", "*");  
    res.header("Access-Control-Allow-Headers", "X-Requested-With");  
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");  
    res.header("X-Powered-By",'3.2.1')  
    res.header("Content-Type", "application/json;charset=utf-8");  
    next();
});

app.use(router); // 挂载路由

app.listen(3000,()=>{
	console.log('listening on port 3000');
});
