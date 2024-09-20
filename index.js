const express = require('express');
const app = express();
const port = 3000;

// Ruta para devolver el JSON
app.get('/jugadores', (req, res) => {
  const jugadores = {
    "jugadores": [
      { "nombre": "Lionel Messi", "telefono": "+34 600 123 456" },
      { "nombre": "Cristiano Ronaldo", "telefono": "+39 700 654 321" },
      { "nombre": "Neymar Jr", "telefono": "+55 800 987 654" },
      { "nombre": "Kylian Mbappé", "telefono": "+33 900 456 789" },
      { "nombre": "Sergio Ramos", "telefono": "+34 600 111 222" }
    ]
  };
  res.json(jugadores);
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});
