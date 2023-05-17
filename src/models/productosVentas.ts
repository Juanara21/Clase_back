import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const ProductoVentas = sequelize.define('ProductoVentas', {
    cantidad: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      precio: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      total: {
        type: DataTypes.STRING(255),
        allowNull: false
      }

    });
