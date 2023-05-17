import { Router } from "express";
import { crearTipoProducto, obtenerTiposProducto, eliminarTipoProducto, actualizarTipoProducto } from "../controllers/tipoProducto";


const router = Router();


router.get('/', obtenerTiposProducto);
router.post("/", crearTipoProducto);
router.put('/:id', actualizarTipoProducto);
router.delete("/:id", eliminarTipoProducto);




export default router;