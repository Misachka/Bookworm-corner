const router = require('express').Router();
const { favorites, User, Book } = require('../../models/favorites');
const withAuth = require('../../utils/auth');



router.post('/', withAuth, async (req, res) => {
  try {
    
    const book = await Book.findByPk(req.body.book_id);

    if (!book) {
      res.status(404).json({ message: 'Book not found' });
      return;
    }
    const addFave = await favorites.create({
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
        include: [{ model: favorites, include: [Book] }],
      });
  
      res.render('favorites', { user });
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const favBook = await favorites.remove({
//       where: {
//         id: req.params.id,
//         book_id: req.session.user_id,
//       },
//     });

//     if (!favBook) {
//       res.status(404).json({ message: 'Book could not be located.' });
//       return;
//     }

//     res.status(200).json(favBook);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;