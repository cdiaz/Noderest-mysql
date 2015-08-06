exports.getUsers = function(req,res,next){

 req.getConnection(function(err,conn){
        if (err) return next("Error de conexión");
        var query = conn.query('SELECT * FROM usuario',function(err,rows){
            if(err){
                console.log(err);
                return next("Mysql Error");
            }
             res.json(rows);
         });
    });
};


exports.getUser = function(req,res,next){

var userId= req.params.id || '';

 req.getConnection(function(err,conn){
        if (err) return next("Error de conexión");
        var query = conn.query('SELECT * FROM usuario WHERE id = ?',userId,function(err,rows){
            if(err){
                console.log(err);
                return next("Mysql Error");
            }
             res.json(rows);
         });
    });
};

exports.saveUser = function(req,res,next){

    var input = JSON.parse(JSON.stringify(req.body));
    var Usuario = {     
            id:'',
            nombre: input.nombre,
            ciudad: input.ciudad
    };

    req.getConnection(function(err,conn){
       
       var query = conn.query(
        "INSERT INTO usuario set ?",Usuario,function(err,rows){
              if(err){
                console.log(err);
                return next("Mysql Error");
            }
             res.json(rows);
         });
    });
};

exports.updateUser = function(req,res,next){

    var userId= req.params.id || '';
    var input = JSON.parse(JSON.stringify(req.body));

      var Usuario = {     
                nombre: input.nombre,
                ciudad: input.ciudad
        };

    req.getConnection(function(err,conn){
           
           var query = conn.query(
            "UPDATE usuario set ? where id = ?",[Usuario,userId],function(err,rows){
                  if(err){
                    console.log(err);
                    return next("Mysql Error");
                }
                 res.json(rows);
             });
        });
};


exports.deleteUser = function(req,res,next){

    var userId= req.params.id || '';

    req.getConnection(function(err,conn){
        if (err) return next("Error de conexión");
        var query = conn.query('DELETE * FROM usuario WHERE id = ?',userId,function(err,rows){
            if(err){
                console.log(err);
                return next("Mysql Error");
            }
             res.json(rows);
         });
    });
};