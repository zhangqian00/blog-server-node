const db = require('../dataBase/mysql.js');

exports.getBlogList = (req,res)=>{ // 后台获取博客列表
	// console.log(req.body);
	let curPage = req.body.pageindex; // 第几页
	let pagesize = req.body.pagesize; // 每页显示条数
	let blogtitle = req.body.blogtitle; // 文章标题
	if(!curPage||!pagesize){ // 缺少参数
		let temp = {
			DataContext: {
				result: null,
				total: 0
			},
			ErrorCode: {
				Code: 10003,
				Message: '缺少参数'
			}
		};
		res.send(temp);
		return;
	}
	let sql = `SELECT @rownum:=@rownum+1 rownumber,id keyid,title,author,keywords,coversrc,blogtags,createdate,fbzt,blogtype
			FROM blog_list,(select @rownum:=0) r
			${blogtitle?"where title like '%"+blogtitle+"%'":""} 
			ORDER BY createdate desc
			limit ${(curPage-1)*pagesize},${pagesize};
			select count(1) total FROM blog_list
			${blogtitle?"where title like '%"+blogtitle+"%'":""};`;
			console.log(sql)
	db.blogList(sql,(err,data)=>{
		if(err){
			console.log('blogList:---'+err);
			throw err;
		}
		let temp = {
			DataContext: {
				result: data[0] || [],
				total: data[1][0].total || 0
			},
			ErrorCode: {
				Code: 0,
				Message: 'blogList success'
			}
		};
		res.send(temp);
	});
};

exports.userBloglist = (req,res)=>{ // 前台获取博客列表
	let curPage = req.body.pageindex; // 第几页
	let pagesize = req.body.pagesize; // 每页显示条数
	if(!curPage||!pagesize){ // 缺少参数
		let temp = {
			DataContext: {
				result: null,
				total: 0
			},
			ErrorCode: {
				Code: 1003,
				Message: '缺少参数'
			}
		};
		res.send(temp);
		return;
	}
	let sql = `select id,title,coversrc,createdate from blog_list
			WHERE fbzt='1' ORDER BY createdate desc limit ${(curpage-1)*pagesize},${pagesize};
			select count(1) total from blog_list `;
	db.blogList(sql,(err,data)=>{
		if(err){
			console.log('blogList--'+err);
			throw err;
		}
		let temp = {
			DataContext: {
				result: data[0] || [],
				total: data[1][0].total || 0
			},
			ErrorCode: {
				Code: 0,
				Message: 'blogList success'
			}
		};
		res.send(temp);
	});
};