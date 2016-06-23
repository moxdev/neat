(function() {
     // the widget definition, where "custom" is the namespace,
    // "colorize" the widget name
    $.widget( 'custom.mapWidget', {
      // default options
      options: {},

      // the constructor
      _create: function() {
        console.log("hello");
        // this.element is the jQuery object so must tap into array "element[0]" to get the actual html
        var element = this.element[0],
            options = this.options
        this.map = Map.create(element, options);
        // console.log(Map);
        // console.log(MapOptionsModule.mapSettings);
      },

      // called when created, and later when changing options
      _refresh: function() {


      },

      // a public method to change the color to a random value
      // can be called directly via .colorize( "random" )
      addMarker: function( options ) {
        return this.map.addMarker(options);
      },

      // events bound via _on are removed automatically
      // revert other modifications here
      _destroy: function() {


      },

      // _setOptions is called with a hash of all options that are changing
      // always refresh when changing options
      _setOptions: function() {


      },

      // _setOption is called for each individual option that is changing
      _setOption: function( key, value ) {
        // prevent invalid color values
        this._super( key, value );
      }
    // End Widget
    });

// End function
}());