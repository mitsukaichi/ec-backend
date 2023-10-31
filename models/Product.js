// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const Category = require('./Category');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull:false,
      validate: {
        notNull: true,
      },
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: true,
      },
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull:false,
      validate: {
        notNull: true,
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull:false,
      defaultValue: 10,
      validate: {
        notNull: true,
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      refernces: {
        model: Category,
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
