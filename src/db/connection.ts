import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

// configuramos dotenv

dotenv.config();

const DB_PASSWORD = process.env.DB_PASSWORD || 'Juanaraujo21';
const DB_NAME = process.env.DB_NAME || 'prueba';
const DB_USER = process.env.DB_USER || 'root';
const DB_HOST = process.env.DB_HOST || 'localhost';
console.log(DB_HOST,DB_NAME,DB_PASSWORD,DB_NAME )

const sequelize = new Sequelize('mysql://root:79qKBsbFb9pMKmeo55Xv@containers-us-west-154.railway.app:6722/railway',{
    // host: DB_HOST,
    dialect:'mysql',
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
          
        }
      }
    
});

export default sequelize;