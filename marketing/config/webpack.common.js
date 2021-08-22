module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/, // when loading in .js file, should be processed by babel
                exclude: /node_modules/, // do not run on this dir
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    }
                }
            }
        ]
    }
}