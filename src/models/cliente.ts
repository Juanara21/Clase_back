import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';

export const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombreCliente: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  direccionCliente: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  telefonoCliente: {
    type: DataTypes.STRING(45),
    allowNull: false
  },
  correoCliente: {
    type: DataTypes.STRING(45),
    allowNull: false,
    unique: true
  },
  passwordCliente: {
    type: DataTypes.STRING(45),
    allowNull: false
  }

});

