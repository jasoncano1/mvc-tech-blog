const { Post } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    console.log('we are here');
    const body = req.body;
    Post.create({ ...body, userId:req.session.userId}).then(newPost => {
        console.log('test',newPost);
        res.json(newPost);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;