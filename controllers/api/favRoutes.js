const router = require('express').Router();
const { favorites } = require('../../models/favorites');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const addFave = await favorites.add({
      user_id: req.session.user_id,
    });

    res.status(200).json(addFave);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const favBook = await favorites.remove({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!favBook) {
      res.status(404).json({ message: 'Book could not be located.' });
      return;
    }

    res.status(200).json(favBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;