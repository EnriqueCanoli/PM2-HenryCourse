//requerir el modulo .env, no las guardamos porque no las usamos sino la deja disponible en el objeto "process.env"
require("dotenv").config();
// configuración a la  base de datos
const mongoose = require("mongoose");

const dbCon = async () =>{
	//realizar la conexión a la base de datos
	//lo que le decimos, no importa donde te requieran ya que trabaja a nivel aplicación , te vas a conectar a esta url
    console.log(process.env.MONGO_URI)
	await mongoose.connect(process.env.MONGO_URI); //url de conexión 

	
}

//exportar la funcion
module.exports = dbCon;


