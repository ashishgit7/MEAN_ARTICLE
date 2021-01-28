const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tags = new Schema({
  name: { type: String, required: false },
}, {
  timestamps: true,
});

const Tags = mongoose.model('Tags', tags);

module.exports = Tags;