// Acciones de prueba
const pruebaPublication = (req, res) => {
    // Retorna una repsuesta
    return res.status(200).send({
        mensaje: 'success',
        test: 'La prueba publication fue exitosa',
    });
};

// Exportar acciones
module.exports = {
    pruebaPublication,
};
