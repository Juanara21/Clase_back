"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Venta = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const cliente_1 = require("./clientes");
exports.Venta = connection_1.default.define('Venta', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fechaVenta: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    subtotal: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    impuestos: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    descuentos: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
});
exports.Venta.belongsTo(cliente_1.Cliente, { foreignKey: "clienteId" });
cliente_1.Cliente.hasMany(exports.Venta, { foreignKey: "clienteId" });
