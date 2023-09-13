const withAuth = require('../utils/auth');
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({include:User}).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('homepage', { posts, loggedIn: req.session.loggedIn });
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });

});

router.get('/login', (req, res) => {
    res.render('login');
});


router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/dashboard', withAuth, (req, res) => {
    Post.findAll({
        where: {
            userId: req.session.userId
        }
    }).then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('dashboard', { posts, loggedIn: true , layout: 'dashboard'});
    }).catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/logout', (req, res) => {
    console.log(req.session.loggedIn);
    if(req.session.loggedIn){
        req.session.destroy(() => {
            res.render('homepage');
        });
    }else{
        res.status(404).end();
    }
});

module.exports = router;



