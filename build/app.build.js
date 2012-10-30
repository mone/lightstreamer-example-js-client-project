({
    appDir: "../src",
    baseUrl: "js",
    dir: "../deploy",
    
    //if using node to build the project this setting must be changed to "uglify"
    optimize: "closure",
    closure: {
        CompilationLevel: 'SIMPLE_OPTIMIZATIONS',
        loggingLevel: 'WARNING',
    },
    
    
    //if using the non-namespaced version of the Lightstreamer library remove the "Lightstreamer/" prefix from LightstreamerClient, Subscription and StatusWidget module names
    paths: {
      "Lightstreamer/LightstreamerClient": "empty:",
      "Lightstreamer/Subscription": "empty:",
      "Lightstreamer/StatusWidget": "empty:"
    },
    
    modules: [
        {
            name: "main",
            includeRequire: false
        }
    ]
})