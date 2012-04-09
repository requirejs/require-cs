/**
 * @license csBuild 0.4.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/require-cs for details
 */

/*jslint strict: false */
/*global define */

define({
    //In your build file's paths config, map cs: 'csBuild' and
    //csBuild: 'cs'. This will allow using the regular cs module as the one
    //used in the optimization, but use this file as the build output for
    //the cs file.
    pluginBuilder: 'csBuild',
    load: function () {
        throw new Error('Cannot dynamically load CoffeeScript');
    }
});
