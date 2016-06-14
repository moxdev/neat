<?php
/**
 * Template Name: Discography Page
 *
 * This is the template that displays the discography page.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package mm4_shane
 */

get_header(); ?>

    <div id="primary" class="content-area">
        <main id="main" class="site-main" role="main">

            <?php
            while ( have_posts() ) : the_post();

                get_template_part( 'template-parts/content', 'page' );

                // If comments are open or we have at least one comment, load up the comment template.
                if ( comments_open() || get_comments_number() ) :
                    comments_template();
                endif;

            endwhile; // End of the loop.

            if(function_exists( custom_photo_gallery() ) ) {
                custom_photo_gallery();
            } ?>

        </main><!-- #main -->
    </div><!-- #primary -->

<?php
get_footer();
