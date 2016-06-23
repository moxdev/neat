(function() {
     // Initializes the Google Map Canvas
    var MapCanvas = (function() {
        var element = document.getElementById('google-map-canvas'),
            options = MapOptionsModule.settings,
            map = Map.create(element, options);

        map.zoom(10);

        var marker1 = map.addMarker({
            id: 1,
            lat: 51.5619461,
            lng: -0.0306486,
            draggable: true,
            icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',
            content: 'Iron Maiden was born here in 1978'
        });

        for (var i = 1; i < 40; i++) {
            map.addMarker({
                id: i++,
                lat: 51.56194612 + Math.random(),
                lng: -0.03064867 + Math.random(),
                draggable: true,
                icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',
                content: 'Random places in UK #' + i
            });
        }
    }()); // End MapCanvas
}());
/*
========================================
* Easily find any marker by id using this function

var found = map.findBy(function(marker) {
    return marker.id === whatevermarkerid;
    console.log(found);
});

* Easily remove and marker by id using this function
map.removeBy(function(marker) {
    return marker.id === whatevermarkerid;
});
Example:
    map.removeBy(function(marker) {
        if (marker.id === 2) {
            console.log(marker);
        }
        return marker.id === 2;
    });
    // Will remove marker with id:2 and console log it
===========================================
*/
