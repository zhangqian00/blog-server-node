const db = require('../dataBase/mysql.js');

exports.addBlog = (req,res)=>{ // 保存博客
    let params = req.body;
    return;
    let sql = ``;
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