// import express from 'express';

// import { validarUsuario } from './routers/ValidarUsuario.js';
// const app = express();

// app.use(express.json());

// const port = 4000;


// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
//   next();
// });

// app.use('/api/validarUsuario',validarUsuario);

// app.listen(port, () => {
//   console.log(`Escuchando en el puerto ${port}`);
// });

import express from 'express';
import { validarUsuario } from './routers/ValidarUsuario.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para el análisis de JSON
app.use(express.json());

// Middleware para permitir el acceso a través de CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

// Rutas
app.use('/api/validarUsuario', validarUsuario);

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  const error = new Error('Ruta no encontrada');
  error.status = 404;
  next(error);
});

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
