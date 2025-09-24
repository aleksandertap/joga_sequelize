const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const adminController = require('../controllers/admin/articles');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.post('/admin/article/create', adminController.createArticle);
module.exports = router;