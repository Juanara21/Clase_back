import { Request, Response } from "express";
import { ProductoVentas } from '../models/productosVentas';

export const crearProductoVenta = async (req: Request, res: Response) => {
    try {
      const productVenta = await ProductoVentas.create(req.body);
      res.status(201).json(productVenta);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al crear el producto de venta.' });
    }
  };
  
 export const obtenerProductoVentas = async (req: Request, res: Response) => {
    try {
      const productosVentas = await ProductoVentas.findAll();
      res.json(productosVentas);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al obtener los productos de venta.' });
    }
  };

  export const eliminarProductoVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const productoVenta = await ProductoVentas.findByPk(id);
      if (productoVenta) {
        await productoVenta.destroy();
        res.json({ message: 'Producto de venta eliminado correctamente.' });
      } else {
        res.status(404).json({ message: 'Producto de venta no encontrado.' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al eliminar el producto de venta.' });
    }
  };

  export const actualizarProductoVenta = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { cantidad,
      precio,
      total  } = req.body;
    try {
      const ventaProducto = await ProductoVentas.findOne({
        where: { id }
      });
      if (!ventaProducto) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      await ventaProducto.update({
       cantidad,
       precio,
       total     
        
      });
      res.status(200).json({ ventaProducto });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  
  
