const { Schema, model } = require('mongoose');

const UserSchema = Schema({
    nombre: {
        type: String,
        require: [true, 'El nombre es un campo obligatorio']
    },
    estado: {
        type: Boolean,
        default: true
    }
});

UserSchema.methods.toJSON = function () {
    const {__v, _id, ...data} = this.toObject(); 
    data.uid = _id;
    return data;
}

module.exports = model('User', UserSchema);
