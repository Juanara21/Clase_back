import { Request, Response } from "express";
import { Venta } from "../models/venta";

export const crearVenta = async (req: Request, res: Response) => {
  try {
    const venta = await Venta.create(req.body);
    res.status(201).json(venta);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al crear la venta.' });
  }
};

export const obtenerVentas = async (req: Request, res: Response) => {
  try {
    const ventas = await Venta.findAll();
    res.status(200).json({ ventas });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al obtener las ventas.' });
  }
};
export const eliminarVenta = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const venta = await Venta.findByPk(id);
    if (venta) {
      await venta.destroy();
      res.json({ message: 'Venta eliminada correctamente.' });
    } else {
      res.status(404).json({ message: 'Venta no encontrada.' });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error al eliminar la venta.' });
  }
};

export const actualizarVenta = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { fechaVenta, subtotal, impuestos, descuentos, total  } = req.body;
  try {
    const venta = await Venta.findOne({
      where: { id }
    });
    if (!venta) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    await venta.update({
     fechaVenta,
     subtotal,
     impuestos,
     descuentos,
     total      
      
    });
    res.status(200).json({ venta });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};



