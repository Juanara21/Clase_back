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
exports.actualizarVenta = exports.eliminarVenta = exports.obtenerVentas = exports.crearVenta = void 0;
const venta_1 = require("../models/venta");
const crearVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const venta = yield venta_1.Venta.create(req.body);
        res.status(201).json(venta);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear la venta.' });
    }
});
exports.crearVenta = crearVenta;
const obtenerVentas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ventas = yield venta_1.Venta.findAll();
        res.status(200).json({ ventas });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener las ventas.' });
    }
});
exports.obtenerVentas = obtenerVentas;
const eliminarVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const venta = yield venta_1.Venta.findByPk(id);
        if (venta) {
            yield venta.destroy();
            res.json({ message: 'Venta eliminada correctamente.' });
        }
        else {
            res.status(404).json({ message: 'Venta no encontrada.' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar la venta.' });
    }
});
exports.eliminarVenta = eliminarVenta;
const actualizarVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { fechaVenta, subtotal, impuestos, descuentos, total } = req.body;
    try {
        const venta = yield venta_1.Venta.findOne({
            where: { id }
        });
        if (!venta) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        yield venta.update({
            fechaVenta,
            subtotal,
            impuestos,
            descuentos,
            total
        });
        res.status(200).json({ venta });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.actualizarVenta = actualizarVenta;
