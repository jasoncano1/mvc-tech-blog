const router = require('express').Router();

router.use('/user',require('./userRoutes.js'));
router.use('/post',require('./postRoutes.js'));

module.exports = router;
