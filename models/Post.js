const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    //coloumn data
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
})

module.exports = Post;