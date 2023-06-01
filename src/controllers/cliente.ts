import { Request, Response } from "express";
import { Cliente  } from "../models/cliente";

export const getAllClientes = async (req: Request, res: Response) => {
    try {
      const clientes = await Cliente.findAll();
      res.status(200).json( clientes );
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };  
  // Obtener un cliente por su id
export const getClienteById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const cliente = await Cliente.findOne({
        where: { id }
      });
      if (!cliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      res.status(200).json({ cliente });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  
  // Crear un nuevo cliente
  export const createCliente = async (req: Request, res: Response) => {
    const { nombreCliente, direccionCliente, telefonoCliente, correoCliente, passwordCliente } = req.body;
    try {
      const cliente = await Cliente.create({
        nombreCliente,
        direccionCliente,
        telefonoCliente,
        correoCliente,
        passwordCliente
      });
      res.status(201).json({ cliente });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  
  // Actualizar un cliente existente
 export const updateCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombreCliente, direccionCliente, telefonoCliente, correoCliente, passwordCliente } = req.body;
    try {
      const cliente = await Cliente.findOne({
        where: { id }
      });
      if (!cliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      await cliente.update({
        nombreCliente,
        direccionCliente,
        telefonoCliente,
        correoCliente,
        passwordCliente
      });
      res.status(200).json({ cliente });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  
  // Eliminar un cliente existente
  export const deleteCliente = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const cliente = await Cliente.findOne({
        where: { id }
      });
      if (!cliente) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      await cliente.destroy();
      res.status(200).json({ message: "Cliente eliminado correctamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  
