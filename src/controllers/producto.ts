import { Request, Response } from "express";
import { Producto } from '../models/producto';


export const crearProducto = async (req: Request, res: Response) => {
    try {
      const producto = await Producto.create(req.body);
      res.status(201).json(producto);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al crear el producto.' });
    }
  };
  
export const obtenerProductos = async (req: Request, res: Response) => {
    try {
      const productos = await Producto.findAll();
      res.json(productos);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al obtener los productos.' });
    }
  };

  export const eliminarProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const producto = await Producto.findByPk(id);
      if (producto) {
        await producto.destroy();
        res.json({ message: 'Producto eliminado correctamente.' });
      } else {
        res.status(404).json({ message: 'Producto no encontrado.' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al eliminar el producto.' });
    }
  };

  export const actualizarProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nombre, marca, precio, stockMin } = req.body;
    try {
      const producto = await Producto.findOne({
        where: { id }
      });
      if (!producto) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      await producto.update({
       nombre,
       marca,
       precio,
       stockMin      
        
      });
      res.status(200).json({ producto });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };