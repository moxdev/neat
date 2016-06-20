// Initializes the Google Map Canvas
function mm4_google_maps_initializer() {
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
        events: [{
            name: 'click',
            callback: function() {
                console.log("Up the Irons!");
            },
            name: 'dragend',
            callback: function() {
                alert("You dragging me down");
            }
        }],
        content: 'Iron Maiden was born here in 1978'
    });
    var marker2 = map.addMarker({
        id: 2,
        lat: 52.8305468,
        lng: -1.381029,
        draggable: true,
        icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',
        events: [{
            name: 'click',
            callback: function() {
                console.log("Live At Donington");
            },
            name: 'dragend',
            callback: function() {
                alert("Live At Donington");
            }
        }],
        content: 'Live At Donington'
    });
    var marker3 = map.addMarker({
        id: 3,
        lat: 51.5058372,
        lng: -0.1899126,
        draggable: true,
        icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',
        events: [{
            name: 'click',
            callback: function() {
                console.log("God Save the Queen!");
            },
            name: 'dragend',
            callback: function() {
                alert("God Save the Queen!");
            }
        }],
        content: 'God Save the Queen!'
    });
    var marker4 = map.addMarker({
        id: 4,
        lat: 51.5432692,
        lng: -0.0106247,
        draggable: true,
        icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',
        events: [{
            name: 'click',
            callback: function() {
                console.log("Some place in London");
            },
            name: 'dragend',
            callback: function() {
                alert("Some place in London");
            }
        }],
        content: 'Some place in London'
    });

    for(var i = 4; i < 40; i++) {
        map.addMarker({
            id: i++,
            lat: 51.5619461 + Math.random(),
            lng: -0.0306486 + Math.random(),
            icon: 'https://s3.amazonaws.com/sg101.forum.photos/xWvhz0uPQNyCTyN3L4S_fQ.gif',
            content: 'Random places in UK #' + i
        });
    }
}

mm4_google_maps_initializer();

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

===========================================
*/
