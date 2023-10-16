const router = require('express').Router();
const userRoutes = require('./userRoutes');
const favRoutes = require('./favRoutes');

router.use('/users', userRoutes);
router.use('/favorites', favRoutes);


module.exports = router;
