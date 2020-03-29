const express = require('express');
const router = express.Router();
const testApi = require('../controller/test.js');
const blogListCtrl = require('../controller/blogList.js');
const addBlogCtrl = require('../controller/addBlog.js');

// 管理端
router.get('/adminApi/test',testApi.test1); // 测试
router.post('/adminApi/blogList',blogListCtrl.getBlogList); // 获取博客列表
router.post('/adminApi/addBlog',addBlogCtrl.addBlog); // 提交博客

// 用户端
router.post('/api/blogList',blogListCtrl.userBloglist); // 获取博客列表
router.post('/api/blogDetail',blogListCtrl.userBlogDetail); // 获取博客详情

module.exports = router;