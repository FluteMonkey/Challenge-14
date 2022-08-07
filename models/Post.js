const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection');

class Post extends Model {}

Post.init({
    //coloumn data
})

module.exports = Post;