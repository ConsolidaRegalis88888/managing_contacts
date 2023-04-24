const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Contact = sequelize.define('contact',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    company: {type: DataTypes.STRING, allowNull: false},
    street: {type: DataTypes.STRING, allowNull: false},
    city: {type: DataTypes.STRING, allowNull: false},
    telephone: {type: DataTypes.STRING, allowNull: false},
    photo: {type: DataTypes.STRING, allowNull: false},
    job_title: {type: DataTypes.STRING, allowNull: false},
    gpsLatitude: {type: DataTypes.FLOAT, allowNull: true},
    gpsLongitude: {type: DataTypes.FLOAT, allowNull: true},
});

module.exports = {
    Contact,
};

