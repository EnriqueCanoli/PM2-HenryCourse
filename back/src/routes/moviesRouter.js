const { Router } = require("express"); // Estoy requiriendo esta clase
const moviesController = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie")

const moviesRouter = Router(); // Creamos una instancia de este enrutador, que tiene la capacidad de definir rutas internamente

// Definimos el endpoint y como segundo argumento damos el controlador
moviesRouter.get('/', moviesController.getAllMovies);
moviesRouter.post('/', validateMovie, moviesController.addMovie);

module.exports = moviesRouter;
