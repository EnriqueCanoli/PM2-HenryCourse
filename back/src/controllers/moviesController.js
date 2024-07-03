const movieService = require("../services/moviesService")

module.exports = {
  getAllMovies: async (req, res) => {
    try{
      const movies = await movieService.getMovies();
      res.status(200).json(movies);
    }catch(err){
      res.status(500).json({
        error: "error al recuperar las peliculas"
      });
    }
    
  },

  addMovie: async(req,res) =>{
    try {
      const {title, year, director, duration, genre,rate, poster} = req.body;
      const movie = await movieService.createMovie({title, year, director, duration, genre,rate, poster});
      res.status(201).json(movie);
    } catch (error) {
      res.status(500).json({
        error: "No se pudo crear la pelicula"
      });
    }
  }
}