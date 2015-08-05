var fs = require('fs');  //Modulo File System para manipulación de ficheros


/* Cargador dinámico de Modelos */
var route = {}
    routes_path = process.cwd() + '/routes'
    fs.readdirSync(routes_path).forEach(function (file) {
        if (file.indexOf('.js') != -1) {
            route[file.split('.')[0]] = require(routes_path + '/' + file)
        }
    })

/* Rutas (EndPoints) */

router.get('/',function(req,res){
     res.send('Hello World!');
});

router.get('/usuarios', route.usuario.listAllUsers);

module.exports = router; 