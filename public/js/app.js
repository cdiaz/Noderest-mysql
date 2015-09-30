var app = angular.module('Noderest', ['ui.bootstrap','angularModalService', 'cgBusy']);

var api_url = "http://localhost:5000/";

app.controller('MainCtrl', function($scope, $filter, ModalService, UsuariosService) {
  		
  		$scope.loadusers = UsuariosService.getUsuarios().success(function(data) {
		  $scope.usuarios = data;
		  });
		  
          $scope.UsuariosModal = function(id) {
            
        	ModalService.showModal({
        		templateUrl: '/partials/modal.html',
        		controller: "UsuarioCtrl",
        		 inputs: {
				     usuarioId: id,
				     }
        	}).then(function(modal) {
        		modal.element.modal({ 
        			backdrop: 'static', 
        			keyboard: false 
        		}); 
        		modal.close.then(function(result) {
        		  var usuarioArr = $filter("filter")($scope.usuarios, { id: result.id });
        		  if (usuarioArr.length) {
        		    usuarioArr[0].id = result.id;
        		    usuarioArr[0].nombre = result.nombre;
        		    usuarioArr[0].ciudad = result.ciudad;
        		  } else {
        		    $scope.usuarios.push(result);
        		  }
        		});
        	});
        };      
        
        $scope.deleteUsuario = function($index, usuario) {

          var confirmdelete = confirm("Desea eliminar a " +usuario.nombre);
          if (confirmdelete == true) {
             UsuariosService.deleteUsuario(usuario.id).success(function(data) {
               $scope.usuarios.splice($index, 1);
          }); 
          } 
          	
        };
});


app.controller('UsuarioCtrl', function($scope, UsuariosService, usuarioId, close) {
  		
  		$scope.loading = UsuariosService.getUsuario(usuarioId).success(function(data) {
      	  $scope.usuario = data[0];
          $scope.modalTitle = (usuarioId == "nuevo") ? 'Nuevo Usuario' :  data[0].nombre;
          $scope.modalbutton = (usuarioId == "nuevo") ? 'Guardar' : 'Actualizar';
		  });
		        
 	    $scope.saveUsuario = function(nombre, ciudad) {

    		if(usuarioId == "nuevo") { 

    			UsuariosService.saveUsuario(nombre, ciudad).success(function(data) {
    				close({
    			    ciudad: ciudad,
              id: data.insertId,
              nombre: nombre
    			  });
    			}); 
    		}
    		else {
    			UsuariosService.updateUsuario(usuarioId, nombre, ciudad).success(function(data){
    			
    			  	close({
    			    ciudad: ciudad,
              id: usuarioId,
              nombre: nombre
    			  });
    			  
    			});
    		}
    	};	  
});

