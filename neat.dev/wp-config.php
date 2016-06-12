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
define('DB_NAME', 'neatDBni1tf');

/** MySQL database username */
define('DB_USER', 'neatDBni1tf');

/** MySQL database password */
define('DB_PASSWORD', '0ZFC1qfQ9z');

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
define('AUTH_KEY',         'koG0kV|wR8s@o!VgR~l8|ZK-lwRCsd1!RCpW]-O9te9[dS_sG1.;*TDxi6.iP2mW.');
define('SECURE_AUTH_KEY',  'Pn7,UfM$,rI6mub{3^QXEnvc}z^QYFv@j7I{bnQ^}vFM3BF}3kQY>r@N4Bzcn7^}');
define('LOGGED_IN_KEY',    'L9;iS]+L2mX{+M6xi6.XH+m7<XI$qE{qb{$QAM^q7>cJ$nB}nY{$Q7rY,vJ4Fvg0@');
define('NONCE_KEY',        '<H2AjQX<u$M3AqUf6*{XEM$iqAIUfMy,n7J}cjQ<$,UBryfn7,{sVh1-|VCs-h8');
define('AUTH_SALT',        'yA{biP*{yEP2OaDt~h19#WeLS[w~O1DpWh:-#L29pWe;+.TaH~#t9L;epW_;+AL;e');
define('SECURE_AUTH_SALT', 'sBvk7>cNZk8[dK~oF0kV|wN4hS|1~S9tZ4G1hR|wKLiSe9[dO_pD:aH+m6#amX29P');
define('LOGGED_IN_SALT',   'n3<bMfA{fP.yM3,vJ3nY}@YI$nB}gQ@>z}8oY[zUFzk8>cN-k4|ZkR!sN8sZ:!RCs');
define('NONCE_SALT',       '8W[-O5pa5|ZK~sG1aO~tH;mW1~SDxh5H1eP.tH2mX;*TDxi2.PAuf3.XI.uI2mX{+');

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
