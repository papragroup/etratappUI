var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx' , 'css']
    },
    
    module:
     {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            }
        ]
        
    },
    
    
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    })],
    devServer: {
        historyApiFallback: true
    },
    
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://192.168.101.221:8080'
        })
    }
}
