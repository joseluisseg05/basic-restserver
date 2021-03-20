# Plantilla de un Servidor con Express de Node

Esta es una plantilla de un servidor realizado con Express en Node con las rutas y controladores necesarios para un CRUD de Usuarios 

## Estructura de directorios 
- assets
    - Carpeta destinada a los archivos estaticos
- controllers
    - Carpeta donde se alojan los controladores de cada modelo, donde se realiza la logica de negocios 
- database
    - Configuración para la conectar con la base de datos con *Mongoose* 
- helpers
    - Carpeta donde se ubican los archivos de las funciones de terceros principalmente  
- middlewares
    - Carpeta en donde estan alojados los archivos para las validaciones 
- models
    - Carpeta donde estan declarados los modelos 
- public
    - Carpeta que se expone de forma publica 
- routes 
    - Carpeta que aloja las rutas *GET, POST, PUT and DELETE*

## Instalación
Para realizar la instalacion de todos lo modulos que se implementar en el servidor es necesario ejecutar 

`npm install`
 