// Acciones de prueba
const pruebaUser = (req, res) => {
    // Retorna una repsuesta
    return res.status(200).send({
        mensaje: 'success',
        test: 'La prueba user fue exitosa',
    });
};

// Exportar acciones
module.exports = {
    pruebaUser,
};
