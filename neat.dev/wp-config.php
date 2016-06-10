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
define('DB_NAME', 'neatDBypgyp');

/** MySQL database username */
define('DB_USER', 'neatDBypgyp');

/** MySQL database password */
define('DB_PASSWORD', 'd0kVHhbSNE');

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
define('AUTH_KEY',         '6mxLPX.#bet6ATfn$BUby3jquEIuy*TXq<EMUnrIMy^.Xb<7nuuIMf*.7Ngk47');
define('SECURE_AUTH_KEY',  'b#EHm+*Hai~#DiptxLTWx]6IQj.3AquxAIb+*<bim6ELPu.]BIb$.<bjnuEMUuy');
define('LOGGED_IN_KEY',    '-h5W-W5CemptHPSt#2Sat25DLw~_Wel_[HXbi2AELx*_Lem_]HmqtHPTa#2AMTn<');
define('NONCE_KEY',        'V8d-G-|hsKsdl|1Kaipt59HPtw~Sahp[19HltwKSah_|19]6ELx*#PXai_]Hmtx~D');
define('AUTH_SALT',        'tx]Pim69ptxLPi~5DetwLSWtxLTX.#Eim+ATbx]2iqufu$AIQ+.<3jqu3MTux*Tbf');
define('SECURE_AUTH_SALT', 'ddwClOSa|15ahw9DKw~![dlp[GOAHa+~#aiqt2LTtx]SWe]5DHl-_2ATt+*Tbim#E');
define('LOGGED_IN_SALT',   '_attHPWjy*EMT*<6muu6EXx+.Xfiq]IPcjyBFMU^.Unu7EMy*.Mfn.78FJRv,');
define('NONCE_SALT',       '+j6I+IiyQf7yMUbj.3BfnuEMUbrvz^JRY,07FkrvyBJc$,07cjnv3BU3BIQuu$.M');

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
