const express = require('express');
const app = express();

app.get('/makers/:name', (req, res) => {
  var nombre = req.params.name;
  if(nombre == null || nombre == ''){
      nombre = "desconocido";
  }
  res.send('<h1>Hola ' + nombre.charAt(0).toUpperCase() + nombre.slice(1) + '!</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));