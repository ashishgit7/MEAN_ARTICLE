const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const article = new Schema({
  desc: { type: String, required: false },
  header: { type: String, required: false },
  tags: { type: Array, required: false },
}, {
  timestamps: true,
});

const Article = mongoose.model('Article', article);

module.exports = Article;