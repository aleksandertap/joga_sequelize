const dotenv = require("dotenv");
dotenv.config();
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DRIVER,
  }
);

const models = require("../../models");

const createArticle = async (req, res) => {
  const { name, slug, image, body } = req.body;

  const newArticle = models.Article.create({
    name: name,
    slug: slug,
    image: image,
    body: body,
    published: new Date().toISOString().slice(0, 19).replace("T", " "),
  })
    .then((article) => {
      return res.status(200).json({ message: "article new created" });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
};

module.exports = {
  createArticle,
};
