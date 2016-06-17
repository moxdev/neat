// Initializes the Google Map Canvas
function mm4_google_maps_initializer() {
    var element = document.getElementById( 'google-map-canvas' ),
    options = MapOptionsModule.settings,
    map = Map.create(element, options);

    map.zoom(10);

    var marker = map.addMarker({
        lat: 51.5619461,
        lng: -0.0306486,
        draggable: false,
        icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',
        content: 'Iron Fucking Maiden',
        event: {
            name: 'click',
            callback: function() {
                // code here - example below
                // alert('Im clicked');
            }
        }
    });
}

mm4_google_maps_initializer();



    // marker = MapOptionsModule.marker,
    // marker = GoogleMapModule.marker(marker);
    // marker = new google.maps.Marker(MapOptions.marker),