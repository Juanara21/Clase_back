import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Venta = sequelize.define('Venta', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      fechaVenta: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      subtotal: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      impuestos: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      descuentos: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      total: {
        type: DataTypes.FLOAT,
        allowNull: false
      }
   
    });


