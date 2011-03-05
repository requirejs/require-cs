/**
 * @license Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/require-cs for details
 */

/**
 * Injects the CoffeeScript code into the loader plugin, using a method
 * similar to the one in CoffeeScript's Cakefile for build:browser
 *
 * To run, use Node:
 *
 * node inject.js path/to/coffeescript/lib/dir plugin.js
 */

/*jslint strict: false, regexp: false */
/*global require: false, process: false, console: false */

(function () {

    var fs = require('fs'),
        csDir = process.argv[2],
        pluginFile = process.argv[3],
        version = process.argv[4],
        files = ['helpers', 'rewriter', 'lexer', 'parser', 'scope', 'nodes', 'coffee-script'],
        injectionStart = '//START COFFEESCRIPT',
        injectionEnd = '//END COFFEESCRIPT',
        versionRegExp = /CoffeeScriptVersion\:\s*'([^']+)'/g,
        text, pluginContents, startIndex, endIndex;

    if (!csDir || !pluginFile || !version) {
        console.log('Usage: node inject.js path/to/coffeescript/lib/dir plugin.js coffeescriptversion');
        return;
    }

    //Make sure directory ends in a slash.
    if (csDir.charAt(csDir.length - 1) !== '/') {
        csDir += '/';
    }

    pluginContents = fs.readFileSync(pluginFile, 'utf8');

    function wrapModules() {
        var text = '';
        files.forEach(function (file) {
            text += "(function () {\n" +
                        "var exports = __MODULES['" + file + "'] = {};\n" +
                        fs.readFileSync(csDir + file + '.js') +
                        "return exports;\n" +
                        "}());";
        });

        return text;
    }

    text = '//START COFFEESCRIPT\n' +
           'CoffeeScript = (function () {\n' +
           'var __MODULES = {}; function require(name) { return __MODULES[name.substring(2)]; };\n' +
           wrapModules() +
           "\nreturn __MODULES['coffee-script'];\n" +
           '\n}());\n' +
           '//END COFFEESCRIPT';

    //Find markers in the plugin file.
    startIndex = pluginContents.indexOf(injectionStart);
    endIndex = pluginContents.indexOf(injectionEnd);

    //Replace the version number
    pluginContents = pluginContents.replace(versionRegExp, "CoffeeScriptVersion: '" + version + "'");

    //Inject CoffeeScript contents
    pluginContents = pluginContents.substring(0, startIndex) +
                     text +
                     pluginContents.substring(endIndex + injectionEnd.length, pluginContents.length);

    fs.writeFileSync(pluginFile, pluginContents, 'utf8');
}());
