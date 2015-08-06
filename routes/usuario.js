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

exports.saveUser = function(req,res,next){};

exports.updateUser = function(req,res,next){};

exports.deleteUser = function(req,res,next){};