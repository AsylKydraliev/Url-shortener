const express = require('express');
const {nanoid} = require("nanoid");
const config = require('../config');
const LinkUrl = require("../models/Link");

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        if(!req.body.originalUrl){
            res.status(400).send({error: 'Url link is required!'});
        }

        const urlObject = {
            _id: nanoid(),
            shortUrl: nanoid(6),
            originalUrl: req.body.originalUrl,
        }

        const link = new LinkUrl(urlObject);

        await link.save();

        return res.send({message: 'Created new product', id: link._id});
    }catch (e){
        next(e);
    }
});

router.get('/', async (req, res, next) => {
    try{
        const query = {};
        const links = await LinkUrl.find(query);

        return res.send(links);
    }catch (e){
        next(e);
    }
});

module.exports = router;