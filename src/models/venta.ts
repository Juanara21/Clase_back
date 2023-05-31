import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { Cliente } from "./cliente";

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

    Venta.belongsTo(Cliente, { foreignKey: "clienteId" });
    Cliente.hasMany(Venta, { foreignKey: "clienteId" });


