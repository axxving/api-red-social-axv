// Acciones de prueba
const pruebaFollow = (req, res) => {
    // Retorna una repsuesta
    return res.status(200).send({
        mensaje: 'success',
        test: 'La prueba Follow fue exitosa',
    });
};

// Exportar acciones
module.exports = {
    pruebaFollow,
};
