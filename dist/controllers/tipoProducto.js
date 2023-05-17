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
exports.actualizarTipoProducto = exports.eliminarTipoProducto = exports.obtenerTiposProducto = exports.crearTipoProducto = void 0;
const tipoProducto_1 = require("../models/tipoProducto");
const crearTipoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tipoProducto = yield tipoProducto_1.TipoProducto.create(req.body);
        res.status(201).json(tipoProducto);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al crear el tipo de producto.' });
    }
});
exports.crearTipoProducto = crearTipoProducto;
const obtenerTiposProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tiposProducto = yield tipoProducto_1.TipoProducto.findAll();
        res.status(200).json({ tiposProducto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al obtener los tipos de producto.' });
    }
});
exports.obtenerTiposProducto = obtenerTiposProducto;
const eliminarTipoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const tipoProducto = yield tipoProducto_1.TipoProducto.findByPk(id);
        if (tipoProducto) {
            yield tipoProducto.destroy();
            res.json({ message: 'Tipo de producto eliminado correctamente.' });
        }
        else {
            res.status(404).json({ message: 'Tipo de producto no encontrado.' });
        }
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error al eliminar el tipo de producto.' });
    }
});
exports.eliminarTipoProducto = eliminarTipoProducto;
const actualizarTipoProducto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { name } = req.body;
    try {
        const tipoproducto = yield tipoProducto_1.TipoProducto.findOne({
            where: { id }
        });
        if (!tipoproducto) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        yield tipoproducto.update({
            name,
        });
        res.status(200).json({ tipoproducto });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.actualizarTipoProducto = actualizarTipoProducto;
