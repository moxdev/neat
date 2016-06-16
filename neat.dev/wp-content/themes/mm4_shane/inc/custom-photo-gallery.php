<?php
/**
 * Custom template tags for this theme.
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @package mm4_shane
 */
function custom_photo_gallery() {
    if(is_page_template( 'page-discography-page.php' ) ) {
        if(function_exists( 'get_field' ) ) {

            if( have_rows('discography-gallery') ): ?>
                <section class="discography-wrapper">
                    <?php while ( have_rows( 'discography-gallery' ) ) : the_row();
                        $image = get_sub_field('album-image');
                        $title = get_sub_field('album-title');
                        $year = get_sub_field('album-year'); ?>

                    <div class="album-wrapper">
                        <div class="album">
                            <img class="album-cover" src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt'] ?>" />
                            <h4 class="album-title"><?php echo $title; ?></h4>
                        </div>
                        <div class="album-year">
                            <h5 class="album-year"><?php echo $year; ?></h5>
                        </div>
                    </div>
                    <?php endwhile; ?>
                </section><?php
            endif;
        }
    }
}



