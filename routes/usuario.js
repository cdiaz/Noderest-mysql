exports.listAllUsers = function(req,res,next){

 req.getConnection(function(err,conn){
        if (err) return next("Error de conexión");
        var query = conn.query('SELECT * FROM usuario',function(err,rows){
            if(err){
                console.log(err);
                return next("Mysql Error, Revise su consulta");
            }
             res.json(rows);
         });
    });
};