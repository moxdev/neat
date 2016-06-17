//  Map Module for building Google Maps canvas, setting options, markers, and events into the mm4_google_maps_initializer() function - /js/google-maps.canvas.js
//
(function() {

    // Uses GM API to set the canvas options
    var Map = (function() {
        function Map(element, options){
            this.gMap = new google.maps.Map(element, options);
        }
        // Allows properties to be added to map canvas ( example "map.zoom(10)" )
        // https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        Map.prototype = {
            // sets zoom level
            zoom: function(level) {
                if(level) {
                    this.gMap.setZoom(level);
                }else {
                    return this.gMap.getZoom();
                }
            },
            // sets events
            // https://developers.google.com/maps/documentation/javascript/reference#Map
            _on: function(options) {
                var self = this;
                google.maps.event.addListener(options.obj, options.event, function(e) {
                    options.callback.call(self, e);
                });
            },
            // sets the marker
            // https://developers.google.com/maps/documentation/javascript/reference#Marker
            addMarker: function(options) {
                var marker;
                options.position = {
                    lat: options.lat,
                    lng: options.lng
                }
                marker = this._createMarker(options);
                    if(options.event) {
                        this._on({
                            obj: marker,
                            event: options.event.name,
                            callback: options.event.callback
                        });
                    }
                    if(options.content) {
                        this._on({
                            obj: marker,
                            event: 'click',
                            callback: function() {
                                var infoWindow = new google.maps.InfoWindow({
                                    content: options.content
                                });
                                infoWindow.open(this.gMap, marker);
                            }
                        })
                    }
                    return marker;
            },
            // creates the marker
            _createMarker: function(options) {
                options.map = this.gMap;
                return new google.maps.Marker(options);
            }
        };
        // prototype end and returns Map
        return Map;
    }());

    // ability to create map by using "Map.create(element, options)"
    Map.create = function(element, options) {
        return new Map(element, options);
    };

    window.Map = Map;
}());

// icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',

// https://developers.google.com/maps/documentation/javascript/reference#Map
//
// Prototype Practice
        // this.gMap.prototype.zoom() = {
        //     zoom: function(level) {
        //         if(level) {
        //             this.gMap.setZoom(level);
        //         }else {
        //             return this.gMap.getZoom();
        //         }
        //     }
        // };
        //
        //     MapCanvasBuilder.prototype = {
    //     on: function(event, callback) {
    //             var self = this;
    //             google.maps.event.addListener(this.gMap, event, function(e) {
    //                 callback.call(self, e);
    //         });
    //     }
    // };
    //
    //      WORKING MAP BUilder
    //     var mapCanvasBuilder = function(element, options) {
    //     this.gMap = new google.maps.Map(element, options);
    // }

    // return {
    //     build: mapCanvasBuilder,
    // };