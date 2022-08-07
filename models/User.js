const {
    Model,
    DataTypes
} = require('sequelize');
const { UPSERT } = require('sequelize/types/query-types');

const sequelize = require('../config/connection');

class User extends Model {}

User.init({
    //coloumn data
})

module.exports = User;