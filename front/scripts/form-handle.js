const { default: axios } = require("axios");

document.getElementById("submitButton").addEventListener("click", function () {
    var input_titulo = document.getElementById("title").value;
    var input_director = document.getElementById("director").value;
    var input_year = document.getElementById("year").value;
    var input_rate = document.getElementById("rate").value;
    var input_poster = document.getElementById("poster").value;
    var duration = document.getElementById("duration").value;

    // Get selected genres
    var genres = [];
    var checkboxes = document.querySelectorAll('input[name="genre"]:checked');
    checkboxes.forEach(function(checkbox) {
        genres.push(checkbox.value);
    });

    if (!input_titulo || !input_director  || !input_year || !input_rate || !input_poster || genres.length == 0 || !duration) {
        return alert("Error: Por favor completa todos los campos."); // Muestra una alerta si algún campo está vacío
    }

    axios.post('http://localhost:3000/movies', { title: input_titulo, year:input_year, director:input_director, duration:duration, genre:genres, rate:input_rate , poster: input_poster })
        .then(response => {
            // Manejar la respuesta del servidor si es necesario
            console.log("Response data: ", response.data);
            alert("Película creada exitosamente")
            // Redireccionar a la página HTML deseada
            window.location.href = "../index.html";
        })
        .catch(error => {
            // Manejar cualquier error que ocurra durante la solicitud
            console.error("Error al crear la película:", error);
        });



});

document.getElementById("borrarButton").addEventListener("click", function () {
    document.getElementById("myForm").reset(); // Restablece los campos del formulario

});

