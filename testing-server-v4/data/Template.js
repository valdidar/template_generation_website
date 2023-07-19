const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const templateSchema = new Schema({
    name: String,
    text: String,
    slug: String
});

module.exports = mongoose.model('Template', templateSchema);