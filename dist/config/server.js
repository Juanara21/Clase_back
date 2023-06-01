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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cliente_1 = require("../models/cliente");
const venta_1 = require("../models/venta");
const tipoProducto_1 = require("../models/tipoProducto");
const producto_1 = require("../models/producto");
const productosVentas_1 = require("../models/productosVentas");
const cliente_2 = __importDefault(require("../routes/cliente"));
const producto_2 = __importDefault(require("../routes/producto"));
const venta_2 = __importDefault(require("../routes/venta"));
const tipoProducto_2 = __importDefault(require("../routes/tipoProducto"));
const productosVentas_2 = __importDefault(require("../routes/productosVentas"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '';
        this.listen();
        this.midlewaires();
        this.routes();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/cliente', cliente_2.default);
        this.app.use('/api/venta', venta_2.default);
        this.app.use('/api/tipoProducto', tipoProducto_2.default);
        this.app.use('/api/producto', producto_2.default);
        this.app.use('/api/productoVentas', productosVentas_2.default);
    }
    midlewaires() {
        this.app.use(express_1.default.json());
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use((0, cors_1.default)());
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                //    await Career.sync();
                yield cliente_1.Cliente.sync();
                yield venta_1.Venta.sync();
                yield tipoProducto_1.TipoProducto.sync();
                yield producto_1.Producto.sync();
                yield productosVentas_1.ProductoVentas.sync();
            }
            catch (error) {
                console.log('Problem connecting to the database ', error);
            }
        });
    }
}
exports.default = Server;
