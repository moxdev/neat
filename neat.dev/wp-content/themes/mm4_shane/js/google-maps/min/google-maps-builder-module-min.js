!function(){var n=function(){function n(n,e){this.gMap=new google.maps.Map(n,e),this.markers=MarkerList.create(),this.markerClusterer=new MarkerClusterer(this.gMap,[])}return n.prototype={zoom:function(n){return n?void this.gMap.setZoom(n):this.gMap.getZoom()},_on:function(n){var e=this;google.maps.event.addListener(n.obj,n.event,function(t){n.callback.call(e,t)})},addMarker:function(n){var e,t=this;return n.position={lat:n.lat,lng:n.lng},e=this._createMarker(n),this.markerClusterer.addMarker(e),this._addMarker(e),n.events&&n.events.forEach(function(n){t._on({obj:e,event:n.name,callback:n.callback})}),n.content&&this._on({obj:e,event:"click",callback:function(){var t=new google.maps.InfoWindow({content:n.content});t.open(this.gMap,e)}}),e},findBy:function(n){return this.markers.find(n)},removeBy:function(n){this.markers.find(n,function(n){n.forEach(function(n){n.setMap(null)})})},_addMarker:function(n){this.markers.push(n)},_createMarker:function(n){return n.map=this.gMap,new google.maps.Marker(n)}},n}();n.create=function(e,t){return new n(e,t)},window.Map=n}();