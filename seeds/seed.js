const sequelize = require('../config/connection');
const { User, Book, Favorites } = require('../models');

const userData = require('./userData.json');
const favData = require('./favData.json');
const bookData = require('./bookData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    for (const fav of favData) {
        await Favorites.create({
            ...fav,
            user_id: users[Math.floor(Math.random() * users.length)].id,
        });
    }
        process.exit(0);
    };

    seedDatabase();