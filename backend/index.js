const express = require('express');
const links = require('./Routes/linkUrl');
const app = express();

const port = 8000;

app.use(express.json());
app.use('/links', links);

const run = async () => {
    app.listen(port, () => {
        console.log(`App listen on port ${port}!`);
    });
};

run().catch(e => console.error(e));