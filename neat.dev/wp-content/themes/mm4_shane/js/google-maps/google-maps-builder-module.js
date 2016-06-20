//  Map Module for building Google Maps canvas, setting options, markers, and events into the mm4_google_maps_initializer() function - /js/google-maps.canvas.js
//
(function() {

    // Uses GMaps API to set the canvas options
    var Map = (function() {
        function Map(element, options) {
            // Creates the gmaps canvas (with elements, options from 'google-maps-options.js' file)
            this.gMap = new google.maps.Map(element, options);
            // Creates a new list for map markers
            this.markers = MarkerList.create();
            // Checks to see if map cluster being used
                // If cluster is being used creates a new cluster
                this.markerClusterer = new MarkerClusterer(this.gMap, []);
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
            // sets events (such as on click)
            // https://developers.google.com/maps/documentation/javascript/reference#Map
            _on: function(options) {
                var self = this;
                google.maps.event.addListener(options.obj, options.event, function(e) {
                    options.callback.call(self, e);
                });
            },
            // Function for adding marker to gmap
            // https://developers.google.com/maps/documentation/javascript/reference#Marker
            addMarker: function(options) {
                // Sets the position for marker
                var marker,
                    self = this;
                options.position = {
                    lat: options.lat,
                    lng: options.lng
                }
                // Creates a new marker
                marker = this._createMarker(options);
                this.markerClusterer.addMarker(marker);
                    // Adds marker to array
                    this._addMarker(marker);
                    // Adds on click event for marker
                    if(options.events) {
                        options.events.forEach(function(event){
                            self._on({
                                obj: marker,
                                event: event.name,
                                callback: event.callback
                            });
                        });
                    }
                    // Adds content for on click event marker
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
            // Find a marker by parameter
            findBy: function(callback) {
                return this.markers.find(callback);
            },
            // Remove marker using the "action" param which loops through and sets the corresponding marker to null
            removeBy: function(callback) {
                this.markers.find(callback, function(markers){
                    markers.forEach(function(marker) {
                        marker.setMap(null);
                    });
                });
            },
            // Private function adds marker to the "markers" array
            _addMarker: function(marker){
                this.markers.push(marker);
            },
            // Private function creates a new gmaps marker
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