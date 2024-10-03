const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear el cuerpo de las peticiones como JSON
app.use(bodyParser.json());

// Sirve archivos estáticos desde el directorio '../frontend'
app.use(express.static(path.join(__dirname, '../frontend')));

// Maneja las peticiones GET a la raíz del servidor
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// Maneja las peticiones POST a la ruta '/api/contact'
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    console.log('Nuevo mensaje recibido:', { name, email, message });
    res.json({ message: 'Mensaje recibido correctamente.' });
});

// Inicia el servidor y escucha en el puerto definido
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});