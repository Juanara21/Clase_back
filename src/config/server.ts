import express,  { Application } from 'express';
import morgan from 'morgan';
import { Cliente } from '../models/cliente';
import { Venta } from '../models/venta';
import { TipoProducto } from '../models/tipoProducto';
import { Producto } from '../models/producto';
import { ProductoVentas } from '../models/productosVentas';
import routesCliente from '../routes/cliente';
import routesProducto from '../routes/producto';
import routesVenta from '../routes/venta';
import routesTipoProducto from '../routes/tipoProducto';
import routesProductosVentas from '../routes/productosVentas';



class Server{
   private app: Application;
   private port: string;

   constructor(){
       this.app = express(); 
       this.port = process.env.PORT || '';
       this.listen();
       this.midlewaires();
       this.routes();
       this.dbConnect();
       
   }

   listen(){
       this.app.listen(this.port, () =>{
           console.log('Aplicacion corriendo en el puerto '+this.port);
       })
   }

   routes(){
       this.app.use('/api/cliente', routesCliente);
       this.app.use('/api/venta', routesVenta);
       this.app.use('/api/tipoProducto', routesTipoProducto);
       this.app.use('/api/producto', routesProducto);
       this.app.use('/api/productoVentas', routesProductosVentas);
       
   }

   midlewaires(){
       this.app.use(express.json());
       this.app.use(morgan('dev'));
    //    this.app.use(cors());
   }

   async dbConnect(){
       try{
        //    await Career.sync();
           await Cliente.sync();
           await Venta.sync();
             await TipoProducto.sync();
             await Producto.sync();
             await ProductoVentas.sync();
           
           

       }catch(error){
           console.log('Problem connecting to the database ' , error);
       }
   }

}

export default Server;