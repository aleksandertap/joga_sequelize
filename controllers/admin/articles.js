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

const updateArticle = async (req, res) => {
  // get article by id
  const article = await models.Article.findOne({
    where: { id: req.params.id },
  });
    if (!article) {
        return res.status(404).json({ message: "Article not found" });
    } 
    const articleUpdate = await article.update(req.body)
    .then((article) => {
      return res.status(200).json({ message: "article updated" });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
}

const deleteArticle = async (req, res) => {
  const article = await models.Article.findOne({
    where: { id: req.params.id },
  });
  if (!article) {
    return res.status(404).json({ message: "Article not found" });
  }
  await article
    .destroy()
    .then(() => {
      return res.status(200).json({ message: "article deleted" });
    })
    .catch((err) => {
      return res.status(500).json({ error: err.message });
    });
}

module.exports = {
  createArticle,
  updateArticle,
  deleteArticle
};
