const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
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
        },
        thumbnail: {
            type: DataTypes.STRING
        }
    },
    {

        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
        modelName: 'book'
    }
);

module.exports = Book;
