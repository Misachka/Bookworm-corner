const router = require('express').Router();
const { Favorites, User, Book } = require('../../models');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
  try {
    
    const book = await Book.findByPk(req.body.book_id);

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    const addFave = await Favorites.create({
      user_id: req.session.user_id,
      book_id: book.id,
    });

    res.status(200).json(addFave);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/', withAuth, async (req, res) => {
    try {
      const user = await User.findByPk(req.session.user_id, {
        include: [{ model: Favorites, include: [Book] }],
      });
  
      res.render('Favorites', { user });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  


module.exports = router;