const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'product',
        key: 'id',
        unique: false //unsure
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      references: {
        model: 'tag',
        key: 'id',
        unique: false //unsure
      }
    }
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
