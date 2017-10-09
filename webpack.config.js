const path = require('path');
const fs  = require('fs');

const lessToJs = require('less-vars-to-js');
const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './src/ant-theme-vars.less'), 'utf8'));

module.exports = {
    entry: {
        app: './src/index.js'
    },

    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ['latest', "stage-2", 'react'],
                    plugins: [
                        ["transform-class-properties"],
                        ['import', {
                            libraryName: 'antd',
                            style: true
                        }],
                    ],
                },
            },
            {
                test: /\.less$/,
                use: [
                    {loader: "style-loader"},
                    {loader: "css-loader"},
                    {loader: "less-loader",
                        options: {
                            modifyVars: themeVariables
                        }
                    }
                ]
            }
        ]
    },
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './'
    }
};