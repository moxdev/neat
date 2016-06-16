//  Module for settings Google Map Options

var MapOptions = (function () {

    var mapSettings = {
        center: {
            lat: 51.5619461,
            lng: -0.0306486
        },
        zoom:10,
        scrollwheel: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    return mapSettings;
}(MapOptions || (MapOptions = {})));
