const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    _id: String,
    shortUrl: {
        type: String,
        required: true
    },
    originalUrl: String
});

const LinkUrl = mongoose.model('LinkUrl', LinkSchema);

module.exports = LinkUrl;