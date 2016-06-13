<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'neatDBbeb2p');

/** MySQL database username */
define('DB_USER', 'neatDBbeb2p');

/** MySQL database password */
define('DB_PASSWORD', '88s5xddaUe');

/** MySQL hostname */
define('DB_HOST', '127.0.0.1');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'FoCKOhlRVos|[k~!58G:1KOV;1KOWpGadx~_pt#]D-:59SWex+;2~#]DHa19SWpta');
define('SECURE_AUTH_KEY',  'S-~lp_#9Dp.#ADL26DWaHPSmp_ai+~25i+*2AE{;ILTAELei+Tatx];nuy{$.<AE');
define('LOGGED_IN_KEY',    'Pq*+a+<.A*+#HTP{63EfX6Xjf$bXi.<+<.LIy3{7MEbYvnXQbyr<^un,$<E7zr}');
define('NONCE_KEY',        'zgo0@!40JNVrk!zZRoh~[_sk|~5:K[!81NGhZKCZRd-sOGdaxp#~d-t]#D5#~[G9W');
define('AUTH_SALT',        'Oli*]<x.+6;A]#DPHia9WPpitPMium.*q+u<2.*6IAXTEPHeaxIBbUr$yjbn,^7$');
define('SECURE_AUTH_SALT', 'k}44JN3cvM^dZwo|0[zs[|C4RJ4F8VNkcNJgYvozVOld~w:|w!-1[GC:|C4RdVG8V');
define('LOGGED_IN_SALT',   '-W1atx]T9DWie+t]ph~x;#H9+u{6;LE;]HAXPbLDaTqm.+me+#*6;um.$3E7<*6M');
define('NONCE_SALT',       'x_;i.+*62PITia+aWi*+<{73QbY7UQb$bTu^$<$<^AMI,0}7YQQcYvUQ},vny>F');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);define('FS_METHOD', 'direct');

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
