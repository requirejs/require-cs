# Upgrading CoffeeScript

Use the inject.js script in the **tools** directory to do this:

* Get the version of CoffeeScript you want from the CoffeeScript site.
* Make sure you have [Node](http://nodejs.org) 0.4.1+ installed.
* Run the following command to update cs.js to have the latest version of CoffeeScript.
This command will inject CoffeeScript 1.0.1 into cs.js:

    node tools/inject.js path/to/coffee-script/lib cs.js 1.0.1

