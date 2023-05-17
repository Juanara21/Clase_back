import { Router } from "express";
import { obtenerProductoVentas, crearProductoVenta, eliminarProductoVenta, actualizarProductoVenta } from "../controllers/productosVentas";


const router = Router();


router.get('/', obtenerProductoVentas);
router.post('/', crearProductoVenta);
router.delete("/:id", eliminarProductoVenta);
router.put("/:id", actualizarProductoVenta);



export default router;