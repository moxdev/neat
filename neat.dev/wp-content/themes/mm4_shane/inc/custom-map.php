<?php
/**
 * Custom Google Map for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package mm4_shane
 */

if ( ! function_exists( 'mm4_show_google_map_canvas' ) ) :

    function mm4_show_google_map_canvas() {
        ?><div id="google-map-canvas"></div><?php
    }

endif;