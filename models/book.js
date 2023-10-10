const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        title: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        },
        genre: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        isbn: {
            type: DataTypes.STRING
        }
    },
    {

        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;