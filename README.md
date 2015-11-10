# Noderest-mysql
Ejemplo Basico de una API Restful con Nodejs, Express y Mysql


Instalación:

- git clone https://github.com/cdiaz/Noderest-mysql.git
- cd Noderest-mysql
- npm install
- edit your config.js database connection 
- import noderest.sql into your database
- npm start
- Fire your browser http://localhost:5000/index.html


Routes:


|        Route       | HTTP verb |        Description       |
|:------------------:|:---------:|:------------------------:|
| /usuarios          | GET       | get All users            |
| /usuarios          | POST      | add new user             |
| /usuarios/:userId  | GET       | get a user               |
| /usuarios/:userId  | PUT       | update a user            |
| /usuarios/:userId  | DELETE    | delete a user            |
