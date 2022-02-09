const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var dataSchema = new Schema({
    name: String,
    username: String,
    upvotes: Number,
    comments: Array
});

var ArticleInfo = mongoose.model('datas', dataSchema);

module.exports = ArticleInfo;