function mm4_shane_scripts() {
    wp_enqueue_style( 'mm4_shane-style', get_stylesheet_uri() );

    wp_enqueue_script( 'mm4_shane-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

    wp_enqueue_script( 'mm4_shane-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

    if ( is_page_template( 'page-map-page.php' ) ) {

        wp_deregister_script( 'jquery' );
        wp_register_script( 'jquery', '//code.jquery.com/jquery-1.10.2.js', array(), null, true );

        wp_deregister_script( 'jquery-ui-core' );
        wp_register_script( 'jquery-ui-core', '//code.jquery.com/ui/1.11.4/jquery-ui.js', array( 'jquery' ), null, true );

        wp_register_script( 'mm4_google-maps-api', 'http://maps.google.com/maps/api/js?sensor=false', array(), null, true );

        wp_register_script( 'mm4_google-maps-cluster-library', get_template_directory_uri() . '/js/google-maps/google-maps-cluster-library/google-maps-cluster-library.js', array( 'mm4_google-maps-api' ), null, true );

        wp_register_script( 'mm4_google-maps-marker-module', get_template_directory_uri() . '/js/google-maps/google-maps-marker-module.js', array(), null, true );

        wp_register_script( 'mm4_google-maps-options', get_template_directory_uri() . '/js/google-maps/google-maps-options.js', array( 'mm4_google-maps-cluster-library' ), null, true );

        wp_register_script( 'mm4_google-maps-builder-library', get_template_directory_uri() . '/js/google-maps/google-maps-builder-library.js', array( 'mm4_google-maps-cluster-library', 'mm4_google-maps-marker-module' ), null, true );

        wp_register_script( 'mm4_jquery-ui-google-maps-widget', get_template_directory_uri() . '/js/google-maps/jquery-ui-library/jquery-ui-google-maps-widget.js', array( 'jquery', 'jquery-ui-core', 'mm4_google-maps-builder-library' ), null, true );

        wp_register_script( 'mm4_shane-google-map-canvas-initializer', get_template_directory_uri() . '/js/google-maps/google-maps-canvas-initializer.js', array( 'mm4_jquery-ui-google-maps-widget' ), null, true );

        // wp_enqueue_script( 'mm4_google-maps-api' );
        // wp_enqueue_script( 'mm4_google-maps-cluster-library' );
        // wp_enqueue_script( 'mm4_google-maps-marker-module' );
        // wp_enqueue_script( 'mm4_google-maps-options' );
        // wp_enqueue_script( 'mm4_google-maps-builder-library' );
        // wp_enqueue_script( 'mm4_jquery-ui-google-maps-widget' );
        wp_enqueue_script( 'mm4_shane-google-map-canvas-initializer' );

    } // End Map Scripts