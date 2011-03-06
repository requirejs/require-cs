({
    appDir: '.',
    baseUrl: 'lib',
    dir: '../demo-built',
    paths: {
        cs: '../../cs'
    },
    modules: [
        {
            name: "cs!main",
            create: true
        }
    ]
})
