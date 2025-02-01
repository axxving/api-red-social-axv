const mongoose = require('mongoose');

// Conexion a la base de datos
const connection = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mi_red_social');
        console.log('Conectado a MongoDB');
    } catch (error) {
        console.log(error);
        throw new Error('No se ha podido conectar a la base de datos');
    }
};

module.exports = {
    connection,
};
