# Lightstreamer :: Example Project #

This example shows how a project using the Lightstreamer JS client can be built using the r.js optimizer.

The project uses RequireJS as AMD loader, its domReady! plugin, the Lightstreamer JS Client 6 library and a custom MySubscriber module.


## Build ##

You can build the project using either Rhino (and optionally Google Closure Compiler) or Node.js. The built files will appear in the deploy folder.

A full guide to optimization is available in the [RequireJS website](http://requirejs.org/docs/optimization.html)
The full list of options for the configuration file is available on [r.js github repo](https://github.com/jrburke/r.js/blob/master/build/example.build.js)  

### Using Rhino ###

1. Install java on the machine.
2. from the build folder run

        java -cp compiler.jar;js.jar org.mozilla.javascript.tools.shell.Main r.js -o app.build.js

### Using Node.js ###

1. Install node on the machine.
2. modify the build/app.build.js file removing the optimize property.
3. from the build folder run

        node r.js -o app.build.js
        
## Resources ##

This project contains several different external resources you may want to upgrade before using using in your own project:

1. build/compiler.jar from [Google Closure Compiler](https://developers.google.com/closure/compiler/)
2. build/js.jar from [Rhino](https://github.com/mozilla/rhino)
3. build/r.js from [r.js](https://github.com/jrburke/r.js/)
4. src/js/require.js from [RequireJS](https://github.com/jrburke/requirejs)
5. src/js/domReady.js from [domReady](https://github.com/requirejs/domReady)
6. src/js/lightstreamer_namespace.js from [Lightstreamer](http://www.lightstreamer.com/) 

