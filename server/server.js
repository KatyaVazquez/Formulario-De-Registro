const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();

// Configuración del middleware
app.use(cors());
app.use(express.json());

app.post('/user', (req, res) => {
  const user = req.body;
  const users = JSON.parse(fs.readFileSync('users.json'));
  console.log(user);
  users.push(user);
  fs.writeFileSync('users.json', JSON.stringify(users));
  res.json({ mensaje: 'Usuario registrado con éxito' });
});

// Rutas
const usersRouter = require('./routes/userRoute');
app.use('/user', usersRouter);

// Iniciar el servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
})