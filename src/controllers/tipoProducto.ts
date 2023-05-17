import { Request, Response } from "express";
import { TipoProducto   } from "../models/tipoProducto";


export const crearTipoProducto = async (req: Request, res: Response) => {
    try {
      const tipoProducto = await TipoProducto.create(req.body);
      res.status(201).json(tipoProducto);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al crear el tipo de producto.' });
    }
  };
  
 export const obtenerTiposProducto = async (req: Request, res: Response) => {
    try {
      const tiposProducto = await TipoProducto.findAll();
      res.status(200).json({ tiposProducto });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al obtener los tipos de producto.' });
    }
  };
  export const eliminarTipoProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const tipoProducto = await TipoProducto.findByPk(id);
      if (tipoProducto) {
        await tipoProducto.destroy();
        res.json({ message: 'Tipo de producto eliminado correctamente.' });
      } else {
        res.status(404).json({ message: 'Tipo de producto no encontrado.' });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error al eliminar el tipo de producto.' });
    }
  };
  
  export const actualizarTipoProducto = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
      const tipoproducto = await TipoProducto.findOne({
        where: { id }
      });
      if (!tipoproducto) {
        return res.status(404).json({ message: "Cliente no encontrado" });
      }
      await tipoproducto.update({
       name,     
        
      });
      res.status(200).json({ tipoproducto });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor" });
    }
  };
  