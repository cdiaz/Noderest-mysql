angular.module('Noderest')
  .factory('UsuariosService', function ($http) {
       return {
         getUsuarios :function(){
            return $http.get(api_url + 'usuarios');     
          },
          saveUsuario : function(nombre,ciudad){
            return $http.post(api_url + 'usuarios', {nombre:nombre, ciudad:ciudad});  
          },
          getUsuario :function(usuarioId){
            return $http.get(api_url + 'usuario/' + usuarioId);     
          },
          updateUsuario: function(usuarioId, nombre, ciudad){
            return $http.put(api_url + 'usuario/' + usuarioId, {nombre:nombre, ciudad:ciudad});
          },
          deleteUsuario: function(usuarioId){
            return $http.delete(api_url + 'usuario/' + usuarioId);
          }
  };
});