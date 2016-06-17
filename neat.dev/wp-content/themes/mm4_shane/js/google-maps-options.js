//  Module for settings Google Map Options
//
var MapOptionsModule = (function () {

    var mapSettings = {
        center: {
            lat: 51.5619461,
            lng: -0.0306486
        },
        scrollwheel: false,
        mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    return {
        settings: mapSettings,
    };
}(MapOptionsModule || (MapOptionsModule = {})));
