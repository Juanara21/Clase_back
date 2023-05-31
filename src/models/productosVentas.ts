import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { TipoProducto } from "./tipoProducto";
import { Venta } from "./venta";

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
 