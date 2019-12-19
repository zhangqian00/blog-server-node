const express = require('express');
const router = express.Router();
const blogListCtrl = require('../controller/blogList.js');

router.get('/api/blogList',blogListCtrl.getBlogList); // 测试
router.post('/api/blogList',blogListCtrl.getBlogList); // 获取博客列表

module.exports = router;