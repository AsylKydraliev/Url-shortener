const express = require('express');
const {nanoid} = require("nanoid");
const LinkUrl = require("../models/Link");

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        if(!req.body.originalUrl){
            res.status(400).send({error: 'Url is required'});
        }

        const urlObject = {
            shortUrl: nanoid(6),
            originalUrl: req.body.originalUrl,
        };

        const link = new LinkUrl(urlObject);
        await link.save();

        return res.send(JSON.stringify(link));
    }catch (e){
        next(e);
    }
});

router.get('/:shortUrl', async (req, res, next) => {
    try{
        const link = await LinkUrl.findOne({shortUrl: req.params.shortUrl});

        if(link){
            res.status(301).redirect(link.originalUrl);
        }
    }catch (e){
        next(e);
    }
});

module.exports = router;