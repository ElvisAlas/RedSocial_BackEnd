import express from 'express';

import validarUsuario from './Routers/validarUsuario';

const app = express();

app.use(express.json());

const port = 4000;


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); 
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); 
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  next();
});

//app.use('/api/validarUsuario',validarUsuario)

app.listen(port, () => {
  console.log(`Escuchando en el puerto ${port}`);
});
