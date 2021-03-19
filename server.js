const express = require('express');

const app = express();

app.get('/',(req,res) => {
  res.send("Hola Martin y Jessica ... y "+ req.query.nombre);
});

const port = process.env.PORT || 8080;

app.listen(8080, () => {
    console.log("hola desde la consola 2");
});
