const db = require('../dataBase/mysql.js');

exports.getBlogList = (req,res)=>{ // 获取博客列表
	// console.log(req);
	db.blogList('SELECT * FROM blog_list',{},(res)=>{
		console.log(res);
		res.send('bloglist');
	});
	
};