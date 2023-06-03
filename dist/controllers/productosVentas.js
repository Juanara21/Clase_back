"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.actualizarProductoVenta = exports.eliminarProductoVenta = exports.obtenerProductoVentas = exports.crearProductoVenta = void 0;
const productosVentas_1 = require("../models/ProductosVentas");
const crearProductoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productVenta = yield productosVentas_1.ProductoVentas.create(req.body);
        res.status(201).json(productVenta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el producto de venta.' });
    }
});
exports.crearProductoVenta = crearProductoVenta;
const obtenerProductoVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productosVentas = yield productosVentas_1.ProductoVentas.findAll();
        res.json(productosVentas);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los productos de venta.' });
    }
});
exports.obtenerProductoVentas = obtenerProductoVentas;
const eliminarProductoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const productoVenta = yield productosVentas_1.ProductoVentas.findByPk(id);
        if (productoVenta) {
            yield productoVenta.destroy();
            res.json({ message: 'Producto de venta eliminado correctamente.' });
        }
        else {
            res.status(404).json({ message: 'Producto de venta no encontrado.' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el producto de venta.' });
    }
});
exports.eliminarProductoVenta = eliminarProductoVenta;
const actualizarProductoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { cantidad, precio, total } = req.body;
    try {
        const ventaProducto = yield productosVentas_1.ProductoVentas.findOne({
            where: { id }
        });
        if (!ventaProducto) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        yield ventaProducto.update({
            cantidad,
            precio,
            total
        });
        res.status(200).json({ ventaProducto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.actualizarProductoVenta = actualizarProductoVenta;
