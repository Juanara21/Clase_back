"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Cliente = connection_1.default.define('Cliente', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombreCliente: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    direccionCliente: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    telefonoCliente: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    },
    correoCliente: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false,
        unique: true
    },
    passwordCliente: {
        type: sequelize_1.DataTypes.STRING(45),
        allowNull: false
    }
});
