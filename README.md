# Lightstreamer :: Example Project #

This project shows how a project using the Lightstreamer JS client can be built using the r.js optimizer.

The project uses Require.JS as AMD loader, its domReady! plugin, the Lightstreamer JS Client 6 library and a custom MySubscriber module.


## Build ##

You can build the project using either Rhino (and optionally Google Closure Compiler) or Node.js. The built files will appear in the deploy folder.

A full guide to optimization is available in the [Require.js website](http://requirejs.org/docs/optimization.html)
The full list of options for the configuration file is available on [r.js github repo](https://github.com/jrburke/r.js/blob/master/build/example.build.js)  

### Using Rhino ###

1. Install java on the machine.
2. Place Rhino js.jar file and Google Closure Compiler compiler.jar file in the build folder.
3. from the build folder run

        java -cp compiler.jar;js.jar org.mozilla.javascript.tools.shell.Main r.js -o app.build.js

### Using Node.js ###

1. Install node on the machine.
2. modify the build/app.build.js file removing the optimize property.
3. from the build folder run

        node r.js -o app.build.js