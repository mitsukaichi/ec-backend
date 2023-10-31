const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Product = require('./Product');
const Tag = require('./Tag');

class ProductTag extends Model {}

ProductTag.init(
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
    product_id: {
      type: DataTypes.INTEGER,
      refernces: {
        model: Product,
        key: 'id',
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      refernces: {
        model: Tag,
        key: 'id',
      }
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
