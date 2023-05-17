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
exports.actualizarProducto = exports.eliminarProducto = exports.obtenerProductos = exports.crearProducto = void 0;
const producto_1 = require("../models/producto");
const crearProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const producto = yield producto_1.Producto.create(req.body);
        res.status(201).json(producto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el producto.' });
    }
});
exports.crearProducto = crearProducto;
const obtenerProductos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productos = yield producto_1.Producto.findAll();
        res.json(productos);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los productos.' });
    }
});
exports.obtenerProductos = obtenerProductos;
const eliminarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const producto = yield producto_1.Producto.findByPk(id);
        if (producto) {
            yield producto.destroy();
            res.json({ message: 'Producto eliminado correctamente.' });
        }
        else {
            res.status(404).json({ message: 'Producto no encontrado.' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el producto.' });
    }
});
exports.eliminarProducto = eliminarProducto;
const actualizarProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombre, marca, precio, stockMin } = req.body;
    try {
        const producto = yield producto_1.Producto.findOne({
            where: { id }
        });
        if (!producto) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        yield producto.update({
            nombre,
            marca,
            precio,
            stockMin
        });
        res.status(200).json({ producto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.actualizarProducto = actualizarProducto;
