import { DataTypes } from 'sequelize';
import sequelize from '../db/connection';
import { TipoProducto } from "./tipoProducto";
import { Venta } from "./venta";
import { ProductoVentas} from "./productosVentas";


export const Producto = sequelize.define('Producto', {
  
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nombre: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      marca: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false
      },
      stockMin: {
        type: DataTypes.FLOAT,
        allowNull: false
       }
    });
    Producto.belongsTo(TipoProducto, { foreignKey: "tipoProductoId" });
    TipoProducto.hasMany(Producto, { foreignKey: "tipoProductoId" });

    Producto.belongsToMany(Venta,{through: ProductoVentas});
    Venta.belongsToMany(Producto,{through: ProductoVentas});