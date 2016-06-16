// Initializes the Google Map Canvas
function mm4_google_maps_initializer() {
    var options = MapOptions,
    element = document.getElementById( 'google-map-canvas' ),
    map = new google.maps.Map(element, options);

    var marker = new google.maps.Marker({
        position: {
            lat: 51.5619461,
            lng: -0.0306486
        },
        map: map,
        icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif'
    });

    google.maps.event.addListener(map, 'click', function(e) {
        console.log(e);
    });
}

mm4_google_maps_initializer();
