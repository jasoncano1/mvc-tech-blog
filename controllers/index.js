const router = require('express').Router();

// const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');
// const dashboardRoutes = require('./dashboardRoutes.js');
// const loginRoutes = require('./loginRoutes.js');

router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
// router.use('/dashboard', dashboardRoutes);
// router.use('/login', loginRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;
