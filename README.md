# require-cs

A [CoffeeScript](http://jashkenas.github.com/coffee-script/) loader plugin
that may work with module loaders like [RequireJS](http://requirejs.org),
[curl](https://github.com/unscriptable/curl) and
[backdraft](http://bdframework.org/bdLoad/docs/bdLoad-tutorial/bdLoad-tutorial.html).

It is known to work with RequireJS 0.24.0+.

This loader plugin makes it easy to write your JS functionality in CoffeeScript,
and easily use it in the browser, Node or Rhino. Plus, if you use the RequireJS
optimizer, your CoffeeScript files can be translated to JavaScript, and inlined
into optimized layers for fast performance.

In development, it uses XMLHttpRequest to fetch the .coffee files, so you can only
fetch files that are on the same domain as the HTML page, and most browsers place
restrictions on using XMLHttpRequest from local file URLs, so use a web server to
serve your .coffee files.

## Usage

1) Download the latest release version of cs.js. It includes the CoffeeScript
implementation.

2) Reference CoffeeScript files via the cs! plugin name:

    require(['cs!app'], function (app) {

    });

Or, if creating a module:

    define(['cs!util'], function (util) {
        util.doSomething();
    });

If you are using define() in a module written with CoffeeScript:

    define ['cs!util'], (util) ->
        util.doSomething

**VERY IMPORTANT**: Only define anonymous modules using CoffeeScript. Otherwise,
the optimization work will not happen correctly -- the name of the module is changed
to allow inlining of the translated JS content.

## Complete web project

The **demo** directory shows a complete web example. See the demo/index.html file
as the entry point into the demo. It is not pretty but it works.

# Optimizing

See **demo/build.sh** for an example build script that drives the optimizer. The
build will generate a **demo-build** directory with the optimized files. Where
the unoptimized demo directory will load 7 files, the optimized one only loads 2,
and the CoffeeScript files have been converted to JavaScript.

## License

Available via the MIT or new BSD license.

The CoffeeScript parts are governed by [the CoffeeScript license](https://github.com/jashkenas/coffee-script/blob/master/LICENSE).