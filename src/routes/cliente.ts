import { Router } from "express";
import { getAllClientes, getClienteById, createCliente, updateCliente, deleteCliente } from "../controllers/cliente";


const router = Router();


router.get('/', getAllClientes);
router.put('/:id', updateCliente);
router.delete("/:id", deleteCliente);
router.post("/", createCliente);
router.get("/:id", getClienteById);


export default router;