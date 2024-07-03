const { default: axios } = require("axios");
const renderCards = require("./renderCards");




const getFilms = () => {
    axios.get('http://localhost:3000/movies').then((response) => {
        renderCards(response.data);
    }).catch((error) => {
        alert(error.message)
    });
}

module.exports = getFilms

/*
const getFilms = () => {
    axios.get('https://students-api.up.railway.app/movies').then((response) => {
        renderCards(response.data);
    }).catch((error) => {
        alert(error.message)
    });
}

module.exports = getFilms*/


/*
axios.get('https://students-api.up.railway.app/movies').then(response =>{
    //responde.data solo contiene los datos, ya que response puede venir con headers, status etc.
    renderCards(response.data);
}).catch(error =>{
    console.error('Error al realizar la solicitud: ',  error);
})*/


// Llama a la función $.get para obtener los datos y luego llama a renderCards
/*
$(document).ready(function () {
    $.get('https://students-api.up.railway.app/movies', function (data) { //data en un arrelgo
        renderCards(data); // Llama a renderCards con los datos obtenidos
    })
        .fail(function (xhr, status, error) {
            console.error('Error al realizar la solicitud:', status, error);
        });
});*/

