const express = require('express');
const router = express.Router();
const testApi = require('../controller/test.js');
const blogListCtrl = require('../controller/blogList.js');
const addBlogCtrl = require('../controller/addBlog.js');

router.get('/api/test',testApi.test1); // 测试
router.post('/api/blogList',blogListCtrl.getBlogList); // 获取博客列表
router.post('/api/addBlog',addBlogCtrl.addBlog); // 提交博客

module.exports = router;