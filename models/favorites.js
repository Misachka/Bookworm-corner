const {Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class Favorites extends Model {}

Favorites.init(

        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            // title: {
            //     type: DataTypes.STRING
            // },
            // author: {
            //     type: DataTypes.STRING
            // },
            // genre: {
            //     type: DataTypes.STRING
            // },
            // description: {
            //     type: DataTypes.STRING
            // },
            // isbn: {
            //     type: DataTypes.STRING
            // },
            // thumbnail: {
            //     type: DataTypes.STRING
            // },
            book_id: {
                type: DataTypes.INTEGER,
                references: {
                  model: 'book',
                  key: 'id',
                },
              },
              user_id: {
                type: DataTypes.INTEGER,
                references: {
                  model: 'user',
                  key: 'id',
                },
              },
        },
        {
    
            sequelize,
            timestamps: false,
            underscored: true,
            freezeTableName: true,
            modelName: 'Favorites'
        }
    );

    module.exports = Favorites;