# require-cs

A [CoffeeScript](http://jashkenas.github.com/coffee-script/) loader plugin
that may work with module loaders like [RequireJS](http://requirejs.org),
[curl](https://github.com/unscriptable/curl) and
[backdraft](http://bdframework.org/bdLoad/docs/bdLoad-tutorial/bdLoad-tutorial.html).

It is known to work with RequireJS 1.0+, 2.x+.

This loader plugin makes it easy to write your JS functionality in CoffeeScript,
and easily use it in the browser, Node or Rhino. Plus, if you use the RequireJS
optimizer, your CoffeeScript files can be translated to JavaScript, and inlined
into optimized layers for fast performance.

In development, it uses XMLHttpRequest to fetch the .coffee files, so you can only
fetch files that are on the same domain as the HTML page, and most browsers place
restrictions on using XMLHttpRequest from local file URLs, so use a web server to
serve your .coffee files.

## Usage <a name="usage"></a>
1. Install via bower ```bower install require-cs```

2. Configure requirejs loader plugin via map:
```javascript
	require.config({
		"map": {
			"*": {
				"cs": "components/require-cs/cs"
			}
		}
	});
```

3. Reference CoffeeScript files via the cs! plugin name. For example, to load
the `app.coffee` file that is in your baseUrl directory:
```javascript
	require(['cs!app'], function (app) {

	});
```

Or, if creating a module that depends on `util.coffee`:
```javascript
	define(['cs!util'], function (util) {
		util.doSomething();
	});
```

If you are using define() in a module written with CoffeeScript:

```coffeescript
	define ['cs!util'], (util) ->
		util.doSomething
```

[Literate CoffeeScript](http://coffeescript.org/#literate) was introduced in CoffeeScript 1.5.0.
To utilize this feature with this plugin you will need to have downloaded >= 1.5.0
of CoffeeScript and qualify the file (with extension) of the literate module you wish to use.

A dependency on the literate module `app.litcoffee`:

    require ['cs!app.litcoffee'], (litapp) ->
      litapp.foo()
      # ...

Or a dependency on the literate module `util.coffee.md`:

    define ['cs!util.coffee.md'], (litutil) ->
      litutil.doSomething()
      # ...

Note: This plugin supports a mixture of literate and regular CoffeeScript files in the
same project.

**VERY IMPORTANT**: Only define anonymous modules using CoffeeScript. Otherwise,
the optimization work will not happen correctly -- the name of the module is changed
to allow inlining of the translated JS content.

## Complete web project <a name="demo"></a>

The **demo** directory shows a complete web example. See the demo/index.html file
as the entry point into the demo. It is not a fancy demo, just shows basic use.

If you have node installed and need to run a web server to try out the demo,
in this directory run `npm install send`, then start up the demo web server
by running:

    node demoserver.js

# Optimizing <a name="optimizing"></a>

See **demo/build.sh** for an example build script that drives the optimizer with
the **demo/build.js** build config.

The build will generate a **demo-build** directory with the optimized files. Where
the unoptimized demo directory will load 7 files, the optimized one only loads 2,
and the CoffeeScript files have been converted to JavaScript. Since all the CoffeeScript
modules have been converted to JS after the build, the CoffeeScript module and
the source cs.js module are not included/needed in the built file.

If you want to do dynamic loading of CoffeeScript files after a build, then
comment out `stubModules: ['cs']` and `exclude: ['coffee-script']` from the build
file so that they will be included in the build.

## License <a name="license"></a>

Available via the MIT or new BSD license.
