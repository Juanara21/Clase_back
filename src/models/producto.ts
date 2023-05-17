import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Producto = sequelize.define('Producto', {
  
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      marca: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      stockMin: {
        type: DataTypes.FLOAT,
        allowNull: false
       }
    });
