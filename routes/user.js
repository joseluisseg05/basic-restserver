const { Router } = require('express');
const { check } = require('express-validator');

const user  = require('../controllers/users');

const { validarCampos } = require('../middlewares/validar_campos');

const router = Router();
//aqui van todas las rutas

router.get('/', user.userGet);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    validarCampos
], user.userPost);

router.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('nombre', 'El nombre es obligatorio').notEmpty(),
    validarCampos
], user.userPut);

router.delete('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    validarCampos
],user.userDelete);

module.exports = router;
