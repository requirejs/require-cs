({
    appDir: '.',
    baseUrl: 'lib',
    //Uncomment to turn off uglify minification.
    //optimize: 'none',
    dir: '../demo-build',
    paths: {
        //Switch the mappings for cs and csBuild so the built
        //version of the cs plugin is super small.
        cs: '../../csBuild',
        csBuild: '../../cs',
        CoffeeScript: '../../CoffeeScript'
    },
    modules: [
        {
            name: 'main',
            //The optimization will load CoffeeScript to convert
            //the CoffeeScript files to plain JS. Use the exclude
            //directive so that the CoffeeScript module is not included
            //in the built file.
            exclude: ['CoffeeScript']
        }
    ]
})
