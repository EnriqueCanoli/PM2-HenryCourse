const conDb = require("./src/config/conDb")
const app = require('./src/server'); // Requerimos el objeto app desde server.js

const PORT = 3000;  // Definimos el puerto en el que queremos que nuestro servidor escuche


//conectate a la base de datos y si sale todo bien, levante el servidor
conDb().then((res) => {
    // Ejecutamos el método listen del objeto app, pasando el puerto como argumento
    app.listen(PORT, () => {
      console.log(`Servidor escuchando en http://localhost:${PORT}`);
    });
}).catch(err=>{
  console.log("error al conectar la base de datos");
});

