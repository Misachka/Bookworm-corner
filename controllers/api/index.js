const router = require('express').Router();
const userRoutes = require('./userRoutes');
const faveRoutes = require('./favRoutes');

router.use('/users', userRoutes);
router.use('/faves', faveRoutes);


module.exports = router;
