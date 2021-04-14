const router = require('express').Router();

const apiRoutes = require('./apiRoutes');
const navRoutes = require('./navRoutes');

router.use('/api', apiRoutes);
router.use('/', navRoutes)

module.exports = router;