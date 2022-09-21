/* gulpfile.js */

const uswds = require("@uswds/compile");

/**
 * USWDS version
 * Set the version of USWDS you're using (2 or 3)
 */

uswds.settings.version = 3;

/**
 * Path settings
 * Set as many as you need
 */

uswds.paths.dist.css = './src';
uswds.paths.dist.js = './src';
uswds.paths.dist.sass = './sass';

uswds.paths.src.uswds = './node_modules/@uswds';
uswds.paths.src.sass = './node_modules/@uswds/uswds/packages';
uswds.paths.src.theme = './node_modules/@uswds/uswds/dist/theme';

/**
 * Exports
 * Add as many as you need
 */

exports.init = uswds.init;
exports.compile = uswds.compile;