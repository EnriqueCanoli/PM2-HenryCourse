module.exports = (req,res,next) =>{
    const {title, year, director, duration, genre,rate, poster} = req.body;

    if(![title, year, director, duration, genre,rate, poster].every(Boolean)){
        return res.status(400).json({message: "Faltan datos!"});
    }

    if(year < 0 || year.toString().length < 4){
        return res.status(400).json({message: "Formato de fecha incorrecta"});
    }

    next();
}
