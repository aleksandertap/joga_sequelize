const dotenv = require('dotenv');
dotenv.config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER
});

const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll();
        res.status(200).json({articles});
        console.log(articles);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getArticleBySlug = async (req, res) => {
    try {
        const article = await Article.findOne({ where: { slug: req.params.slug } })
        res.status(200).json({article});
        console.log(article);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllArticles,
    getArticleBySlug
};