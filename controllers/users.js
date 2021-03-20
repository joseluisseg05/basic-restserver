const { response } = require('express');

const { User } = require('../models/user');

const userGet = async (req, res = response) => {
    //Cuerpo de la funcion
    const users = await User.find({estado:true});
    res.json({
        msj: 'Hola Mundo - Get',
        users
    });
}

const userPost = async (req, res = response) => {
    //Cuerpo de la funcion
    const { nombre } = req.body;

    const user = new User({ nombre });
    await user.save();

    res.json({
        msj: 'Hola Mundo - Post',
        user
    });
}

const userPut = async (req, res = response) => {
    //Cuerpo de la funcion
    const { id } = req.params;
    const { nombre } = req.body;

    const user = await User.findByIdAndUpdate(id, nombre);

    res.json({
        msj: 'Hola Mundo - Put',
        user
    });
}

const userDelete = async (req, res = response) => {
    //Cuerpo de la funcion
    const { id } = req.params;

    const user = await User.findByIdAndUpdate(id, { estado: false });

    res.json({
        msj: 'Hola Mundo - Delete',
        id
    });
}


module.exports = {
    userGet,
    userPost,
    userPut,
    userDelete
}