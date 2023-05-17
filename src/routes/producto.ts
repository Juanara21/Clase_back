import { Router } from "express";
import { obtenerProductos, crearProducto, eliminarProducto, actualizarProducto } from "../controllers/producto";


const router = Router();


router.get('/', obtenerProductos);
router.put('/:id', actualizarProducto);
router.delete("/:id", eliminarProducto);
router.post("/", crearProducto);



export default router;