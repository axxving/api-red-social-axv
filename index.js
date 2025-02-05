// Importar dependencias
const { connection } = require('./database/connection_database');
const express = require('express');
const cors = require('cors');

// conexion a la base de datos
connection();

// Servidor con node
const app = express();
const puerto = 3900;

// Configurar cors
app.use(cors());

// Convertir datos del body a objetos js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cargar archivo de rutas
const UserRoutes = require('./routes/routes_user');

// uso de las rutas
app.use('/api', UserRoutes);

// Ruta prueba
app.get('/ruta-prueba', (req, res) => {
    return res.status(200).json({
        mensaje: 'Ruta funcionando correctamente',
    });
});

// Poner el servidor a escuchar peticiones http
app.listen(puerto, () => {
    console.log('Servidor node iniciado en puerto:', puerto);
});
