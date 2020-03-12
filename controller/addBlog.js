const db = require('../dataBase/mysql.js');

exports.addBlog = (req,res)=>{ // 保存博客
    let params = req.body;
    console.log(params);
    let sql = `INSERT INTO blog_list (title,author,keywords,coversrc,blogtags,fbzt,blogtype,blogcontent) 
                VALUE("${params.title}","${params.author}","${params.keywords}","${params.coversrc}","${params.blogtags}","${params.fbzt}","${params.blogtype}","${params.blogcontent}")`;
    // console.log(sql)
    db.createBlog(sql,(err,data)=>{
        if(err){
            console.log('createBlog:---'+err);
            throw err;
        }
        let temp = {
            DataContext: true,
			ErrorCode: {
				Code: 0,
				Message: 'creatBlog success'
			}
        };
        res.send(temp);
    });
};