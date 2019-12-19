const mysql = require('mysql');
const config = require('../config/default.js');

const connection = mysql.createConnection({
	host: config.database.HOST,
	user: config.database.USERNAME,
	password: config.database.PASSWORD,
	database: config.database.DATABASE
});

exports.blogList = (sql,params,cb)=>{
	connection.connect();

	connection.query(sql,(err,data)=>{
		if(err){
			console.log(err);
			throw err;
		}
		cb(data);
	});
	connection.end((err)=>{
		if(err){
			console.log('关闭数据库连接失败！');
			throw err;
		}
	});
};


