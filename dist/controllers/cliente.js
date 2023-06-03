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
exports.deleteCliente = exports.updateCliente = exports.createCliente = exports.getClienteById = exports.getAllClientes = void 0;
const cliente_1 = require("../models/Cliente");
const getAllClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const clientes = yield cliente_1.Cliente.findAll();
        res.status(200).json(clientes);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.getAllClientes = getAllClientes;
// Obtener un cliente por su id
const getClienteById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const cliente = yield cliente_1.Cliente.findOne({
            where: { id }
        });
        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        res.status(200).json({ cliente });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.getClienteById = getClienteById;
// Crear un nuevo cliente
const createCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombreCliente, direccionCliente, telefonoCliente, correoCliente, passwordCliente } = req.body;
    try {
        const cliente = yield cliente_1.Cliente.create({
            nombreCliente,
            direccionCliente,
            telefonoCliente,
            correoCliente,
            passwordCliente
        });
        res.status(201).json({ cliente });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.createCliente = createCliente;
// Actualizar un cliente existente
const updateCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombreCliente, direccionCliente, telefonoCliente, correoCliente, passwordCliente } = req.body;
    try {
        const cliente = yield cliente_1.Cliente.findOne({
            where: { id }
        });
        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        yield cliente.update({
            nombreCliente,
            direccionCliente,
            telefonoCliente,
            correoCliente,
            passwordCliente
        });
        res.status(200).json({ cliente });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.updateCliente = updateCliente;
// Eliminar un cliente existente
const deleteCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const cliente = yield cliente_1.Cliente.findOne({
            where: { id }
        });
        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }
        yield cliente.destroy();
        res.status(200).json({ message: "Cliente eliminado correctamente" });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
});
exports.deleteCliente = deleteCliente;
