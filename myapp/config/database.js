
const Sequelize = require('sequelize');

module.exports = new Sequelize('nodeblog', 'nodeblog', 'nodeblog', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
    
