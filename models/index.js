const User = require('./User');
const favorites = require('./favorites');
const Book = require('./book');

User.hasMany(favorites, {
    foreignKey: 'user_id',
});

favorites.belongsTo(User, {
    foreignKey: 'user_id',
});


favorites.belongsTo(Book, {
    foreignKey: 'book_id',
});

module.exports = { User, favorites, Book };
