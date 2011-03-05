# require-cs

A [CoffeeScript](http://jashkenas.github.com/coffee-script/) loader plugin
that works with module loaders like [RequireJS](http://requirejs.org),
[curl](https://github.com/unscriptable/curl) and
[backdraft](http://bdframework.org/bdLoad/docs/bdLoad-tutorial/bdLoad-tutorial.html).

This loader plugin makes it easy to write your JS functionality in CoffeeScript,
and easily use it in the browser, Node or Rhino. Plus, if you use the RequireJS
optimizer, your CoffeeScript files can be translated to JavaScript, and inlined
into optimized layers for fast performance.

## Usage

1) Download the latest release version of cs.js. It includes the CoffeeScript.
implementation.

2) Reference CoffeeScript files via the cs! plugin name:

    require(['cs!app'], function (app) {

    });

Or, if creating a module:

    define(['cs!util'], function (util) {
        util.doSomething();
    });

That is it! If you are using define() in a module written with CoffeeScript:

    define ['cs!util'], (util) ->
        util.doSomething

## All-CoffeeScript web project

You can use the data-main approach to loading the main app file for your page
so that you can code all of your project. In the HTML:

    <script data-main="cs!main" src="require.js"></script>

TODO: flesh out, confirm paths.

# Optimizing

TODO: show example that works in the optimizer.

## License

Available via the MIT or new BSD license.

The CoffeeScript parts are governed by [the CoffeeScript license](https://github.com/jashkenas/coffee-script/blob/master/LICENSE).