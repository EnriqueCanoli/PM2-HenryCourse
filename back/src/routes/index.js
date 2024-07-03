const { Router } = require("express"); // Estoy requiriendo esta clase
const moviesRouter = require("./moviesRouter");

const router = Router(); // Creamos una instancia de este enrutador, que tiene la capacidad de definir rutas internamente

router.use("/movies", moviesRouter); //este va hacer nuestro enrutador, para modularizar

module.exports = router;

