//  Module for settings Google Map Options
//
var MapOptionsModule = (function () {

    var mapSettings = {
        center: {
            lat: 51.5619461,
            lng: -0.0306486
        },
        scrollwheel: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.DEFUALT
        },
        panControlOptions: {
            postion: google.maps.ControlPosition.LEFT_BOTTOM
        },
        cluster: {
            options: {
                imagePath: '/js/google-maps/google-maps-cluster-library/images',
                styles: [{

                }]
            }
        }
    };
    return {
        settings: mapSettings,
    };
}(MapOptionsModule || (MapOptionsModule = {})));