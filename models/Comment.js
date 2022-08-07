const {
    Model,
    DataTypes
} = require('sequelize');

const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    //coloumn data
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    comment_text: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'user',
            key: 'id'
        }
    },
})

module.exports = Comment;