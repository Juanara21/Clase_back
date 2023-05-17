import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const TipoProducto = sequelize.define('tipoProducto', {
   id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  }
   
    });




