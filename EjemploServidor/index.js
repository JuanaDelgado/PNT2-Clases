const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

/**
 * ? Esto de aca no es tan importante, lo puse para que puedas vez
 * ? Que al pedir a esta url, te va a saltar que alguien solicito acceso
 */
// Funcion para mostrar que se esta accediendo a la aplicacion
app.use((req, res, next) => {
  // Obtengo la hora actual
  const now = new Date().toISOString();
  // Muestro en la pantalla que se hizo una peticion
  console.log(`[${now}] ${req.method} ${req.url}`);
  next(); // voy a lo que seria la peticion
});

/**
 * * ESTO SI ES IMPORTANTE
 * * Este es el link para que vos puedas recibir tus cervezas
 * * El link basicamente seria http://localhost:3000/api/cervezas (la url a la que le tenes que hacer fetch)
 */
app.get('/api/cervezas', (req, res) => {
  // Abro el archivo con javascript y su libreria para encontrar archivos
  const filePath = path.join(__dirname, 'bddDeMentira.json');
  // Leo el archivo
  fs.readFile(filePath, 'utf8', (err, data) => {
    // Si ocurrio un error al intentar leer el archivo
    if (err) {
      // Aviso que exploto todo y mando un mensajito de que no se pudo leer las cervezas
      return res.status(500).json({ error: 'No se pudo leer el archivo de cervezas' });
    }
    // Las cervezas las envio como un JSON (en si ya eran un json pero bueno, es demostrativo)
    res.json(JSON.parse(data));
  });
});


/**
 * * ESTO TAMBIEN ES IMPORTANTE
 * * Basicamente levanta el servidor y se queda esperando a que alguien le diga,
 * * Dame la data (dame las cervezas en nuestro caso!!!)
 */
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el link => http://localhost:${PORT}`);
});
