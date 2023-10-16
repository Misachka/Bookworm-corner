const router = require('express').Router();
const { Favorites} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/favorites', withAuth, async (req, res) => {
    try {
      const user = await User.findByPk(req.session.user_id, {
        include: [{ model: Favorites, include: [Book] }],
      });
  
      res.render('favorites', { user });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/favorites', withAuth, async (req, res) => {
  try {
    
    const book = await Book.findOrCreate({
      where : { google_id: '' },
      defaults:{
        google_id : " ",
        title : " ",
        author : " "

      }
    })

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


  


module.exports = router;