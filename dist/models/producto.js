"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producto = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const tipoProducto_1 = require("./tipoProducto");
const venta_1 = require("./venta");
const productosVentas_1 = require("./productosVentas");
exports.Producto = connection_1.default.define('Producto', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    marca: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    },
    stockMin: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false
    }
});
exports.Producto.belongsTo(tipoProducto_1.TipoProducto, { foreignKey: "tipoProductoId" });
tipoProducto_1.TipoProducto.hasMany(exports.Producto, { foreignKey: "tipoProductoId" });
exports.Producto.belongsToMany(venta_1.Venta, { through: productosVentas_1.ProductoVentas });
venta_1.Venta.belongsToMany(exports.Producto, { through: productosVentas_1.ProductoVentas });
