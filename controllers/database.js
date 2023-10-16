const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const CartItem = sequelize.define('cartItem', {
  bookId: {
    type: DataTypes.STRING,
    allowNull: false
  },

  bookTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 1
  }
});

module.exports = CartItem;
