const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
    shortUrl: String,
    originalUrl: {
        type: String,
        required: true
    }
});

const LinkUrl = mongoose.model('LinkUrl', LinkSchema);

module.exports = LinkUrl;