 
module.exports = {
 
    entry:  './app/app.js',
    output: { 
        //filename: "./public/js/build.js",
        filename: "./public/build.js",
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /node_modules/,
            loader: 'babel'
        },
        {
            test: /\.jsx?$/,         // Match both .js and .jsx files
            exclude: /node_modules/, 
            loader: "babel", 
            query:
              {
                presets:['react']
              } 
        }
        ]
    },
    watch: true
};