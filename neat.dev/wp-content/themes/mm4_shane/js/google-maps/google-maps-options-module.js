//  Module for settings Google Map Options
//
var MapOptionsModule = (function () {

    var mapSettings = {
        center: {
            lat: 51.5619461,
            lng: -0.0306486
        },
        disableDefaultUI: false,
        scrollwheel: true,
        mapTypeId:google.maps.MapTypeId.ROADMAP,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.DEFUALT
        },
        panControlOptions: {
            postion: google.maps.ControlPosition.LEFT_BOTTOM
        },
        // Options for setting MarkerCLusterer styles
        cluster: {
            options: {
                styles: [{
                    url: '/wp-content/themes/mm4_shane/js/google-maps/google-maps-cluster-library/images/m1.png',
                    height: 56,
                    width: 55,
                    textColor: '#ff0',
                    textSize: 16
                }]
            }
        }
    };
    return {
        settings: mapSettings,
    };
}(MapOptionsModule || (MapOptionsModule = {})));