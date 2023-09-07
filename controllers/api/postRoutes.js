const { Post } = require('../../models');
const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    const body = req.body;
    Post.create({ ...body, userId:req.session.userId}).then(newPost => {
        res.json(newPost);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.put('/:id', withAuth, async (req, res) => {
    
    Post.update(req.body, {where: {id: req.params.id}})
        .then(newPost => {
        res.json(newPost);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.delete('/:id', withAuth, async (req, res) => {
    Post.destroy({where: {id: req.params.id}})
        .then(newPost => {
        res.json(newPost);
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;