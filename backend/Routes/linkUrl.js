const express = require('express');
const {nanoid} = require("nanoid");

const router = express.Router();

router.post('/', async (req, res, next) => {
    try{
        if(!req.body.originalUrl){
            res.status(400).send({error: 'Url link is required!'});
        }

        const urlObject = {
            _id: nanoid(),
            shotUrl: nanoid(6),
            originalUrl: req.body.originalUrl,
        }
        return res.send(urlObject);
    }catch (e){
        next(e);
    }
})

module.exports = router;