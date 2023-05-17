import { Router } from "express";
import { crearVenta, obtenerVentas, actualizarVenta, eliminarVenta } from "../controllers/venta";


const router = Router();


router.get('/', obtenerVentas);
router.post("/", crearVenta);
router.put('/:id', actualizarVenta);
router.delete("/:id", eliminarVenta);



export default router;