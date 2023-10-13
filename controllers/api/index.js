const router = require('express').Router();
const userRoutes = require('./userRoutes');
const faveRoutes = require('./favRoutes');

router.use('/users', userRoutes);
router.use('/favorites', faveRoutes);


module.exports = router;
