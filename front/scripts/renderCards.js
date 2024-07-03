// Define la función renderCards
const renderCards = (data) => {
    // Itera sobre cada película en los datos de respuesta
    data.forEach(function(movie) {
        // Crea elementos jQuery para los componentes de la película
        var mainContainer = $('<div class="main-container"></div>');
        var posterContainer = $('<div class="poster-container"></div>');
        var ticketContainer = $('<div class="ticket-container"></div>');
        var ticketContent = $('<div class="ticket__content"></div>');

        // Rellena el contenedor del póster con el póster de la película
        posterContainer.html('<a href="#"><img src="' + movie.poster + '" class="poster" /></a>');

        // Rellena el contenido del ticket con los detalles de la película
        ticketContent.html('<h4 class="ticket__movie-title"> ' + movie.title + ' - ' + movie.year + '</h4>' +
            '<p class="ticket__movie-slogan"> ' + movie.director + ' Rate: ' + movie.rate + '</p>' +
            '<p class="ticket__current-price">' + movie.duration + '</p>' +
            '<p class="ticket__old-price">' + movie.genre + '</p>' +
            '<button class="ticket__buy-btn">Ver</button>');

        // Añade el contenido del ticket y el contenedor del póster al contenedor principal
        ticketContainer.append(ticketContent);
        mainContainer.append(ticketContainer);
        mainContainer.append(posterContainer);

        // Añade el contenedor principal al elemento '#films'
        $('#films').append(mainContainer);
    });
}

module.exports = renderCards;