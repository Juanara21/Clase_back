"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoVentas = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.ProductoVentas = connection_1.default.define('ProductoVentas', {
    cantidad: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    precio: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    total: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    }
});
