const mysql = require('mysql');
const config = require('../config/default.js');

const pool = mysql.createPool({ // 连接池
	host: config.database.HOST,
	user: config.database.USERNAME,
	password: config.database.PASSWORD,
	database: config.database.DATABASE,
	multipleStatements: true // 支持执行多条sql
});

exports.blogList = (sql,cb)=>{ // 查询博客列表
	pool.getConnection((err,conn)=>{
		if(err){
			cb(err,null,null);
			return;
		}
		conn.query(sql,(qerr,data)=>{
			conn.release(); // 释放连接
			cb(qerr,JSON.parse(JSON.stringify(data)));
		});
	});
};

exports.createBlog = (sql,cb)=>{ // 创建博客
	pool.getConnection((err,conn)=>{
		if(err){
			cb(err,null,null);
			return;
		}
		conn.query(sql,(qerr,data)=>{
			conn.release();
			cb(qerr,data);
		});
	});
};


