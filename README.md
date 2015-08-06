# Noderest-mysql
Ejemplo Basico de una API Restful con Nodejs, Express y Mysql


Instalación:

- git clone https://github.com/cristiamdiaz/Noderest-mysql.git
- cd Noderest-mysql
- npm install
- edit your config.js database connection 
- import noderest.sql into your database
- npm start
<<<<<<< HEAD
- Fire your browser http://localhost:5000/usuarios

=======
- Open http://localhost:5000

Routes:


|        Route       | HTTP verb |        Description       |
|:------------------:|:---------:|:------------------------:|
| /usuarios          | GET       | get All users            |
| /usuarios          | POST      | add new user             |
| /usuarios/:user_id | GET       | get a user (for editing) |
| /usuarios/:user_id | PUT       | update a user            |
| /api/user/:user_id | DELETE    | delete a user            |
>>>>>>> b20d1a8cfb466b36ac6f9fa24bc046bb4264aa8c
