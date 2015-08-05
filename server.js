/*Dependencias */

var express     = require('express'), //Framework para desplegar Servidor http
    bodyParser  = require('body-parser'), //Middleware que Analiza el cuerpo (Body) de las peticiones
    cors        = require('cors'), //Habilita CORS (Cross-Origin-Resource-Sharing)
    mysql       = require('mysql'), //Conector mysql para Nodejs
    connection  = require('express-myconnection'), //Middleware que provee automáticamente la conexion Mysql
    config      = require('./config'); //Carga archivo de configuracion

/* Configuración del Servidor */
var server      = express(); //Levanta Servidor HTTP
    router      = express.Router(); //Instanciar objeto Router de Express para manejo de Rutas
    server.use(connection(mysql, config.db,'request')) // Define conexion a la base de datos
          .use(bodyParser.urlencoded({ extended: false })) //Soporte para Urls Codificadas en el Body Request 
          .use(bodyParser.json())  //Expone mediante req.body un objeto JSON recibido en el Request
          .use(cors()) //Habilita CORS para todas las peticiones
          .use('/', require('./routes')) //Carga los archivos de la carpeta route

/* Correr servidor*/
server.listen(process.env.PORT || 3000, process.env.IP || "127.0.0.1", function(){
    console.log("Api Iniciada");
});