import { Sequelize } from "sequelize";

const sequelize = new Sequelize('prueba','root','Juanaraujo21',{
    host: 'localhost',
    dialect:'mysql',
    
});

export default sequelize;