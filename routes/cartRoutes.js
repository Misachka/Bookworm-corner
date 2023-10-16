const express = require('express');
const router = express.Router();
const CartItem = require('../controllers/database');

router.post('/addToCart/:bookId', async (req, res) => {
  const bookId = req.params.bookId;
  try {
    await CartItem.create({ bookId });
    res.status(200).send('Book added to cart.');
  } catch (error) {
    res.status(500).send('Failed to add book to cart.');
  }
});

router.get('/cart', async (req, res) => {
  try {
    const cartItems = await CartItem.findAll();
    res.render('cart', { cart: cartItems });
  } catch (error) {
    res.status(500).send('Failed to retrieve cart items.');
  }
});

module.exports = router;
