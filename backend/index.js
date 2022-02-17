const express = require('express');
const mongoose = require("mongoose");
const links = require('./Routes/linkUrl');
const config = require('./config');
const app = express();

const port = 8000;

app.use(express.json());
app.use('/links', links);

const run = async () => {
    await mongoose.connect(config.mongo.db, config.mongo.options);

    app.listen(port, () => {
        console.log(`App listen on port ${port}!`);
    });

    process.on('exit', () => {
        mongoose.disconnect();
    });
};

run().catch(e => console.error(e));