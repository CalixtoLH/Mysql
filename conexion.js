 var Sequelize = require("sequelize");
 var usuarioModelo = require("./modelos/usuarios")
  require("dotenv").config();

 var db = process.env.DB_MYSQL;
var usuario = process.env.USUARIO_MYSQL;
var password = process.env.PASSWORD_MYSQL;
var host = process.env.HOST_MYSQL;
var port = process.env.PORT_MYSQL;


  var conexion = new Sequelize(db, "3nnif69rv59n7envtdlr", password,{
    host:host,
    port:port,
     dialect:'mysql',
     dialectOptions:{
       ssl:{
         rejecUnauthorized:true
      }
    }
 });

 var usuario = usuarioModelo(conexion);

 conexion.sync({force:false})
  .then(()=>{
     console.log("Concetado a MYSQL planetScale");
  })
//  .catch((err)=>{
//    console.log("Error al conectarse a MYSQL"+err);
//     db = process.env.DB_MYSQL_LOCAL;
//   usuario = process.env.USUARIO_MYSQL_LOCAL;
//   password = process.env.PASSWORD_MYSQL_LOCAL;
//   host = process.env.HOST_MYSQL_LOCAL;
//   port = process.env.PORT_MYSQL_LOCAL;
//   conexion = new Sequelize(db, usuario, password,{
//    host:host,
//    port:port,
//    dialec:'mysql',
//  });
 

//  module.exports={
//     Usuario:Usuario
//  }