const dotenv = require('dotenv');
dotenv.config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER
});

const models = require('../models');

const getAuthorArticles = async (req, res) => {
    try {
        const author = await models.Author.findOne({ where: { id: req.params.id }, include: [{model:models.Article}] });
        res.status(200).json({author});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getAuthorArticles
};