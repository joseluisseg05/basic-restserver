const express = require('express');
const cors = require('cors');

const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
            user : '/api/user',
        }

        //conectar bd
        this.conectarDB();

        //Middlewares
        this.middlewares();

        //Rutas de aplicacion 
        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){

        //cors
        this.app.use(cors());

        //lectura y parcio
        this.app.use( express.json());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.paths.user, require('../routes/user'));
    }

    listen(){
        this.app.listen(this.port, ()=> {
            console.log('Servidor corriendo en: ', this.port);
        });
    }
}

module.exports = Server;
