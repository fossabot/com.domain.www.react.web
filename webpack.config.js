const path = require('path');
const webpack = require('webpack');
const output = './www/dist';

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    var client ={
        stats : {modules:false},
        entry: {'main':'./app/client/index.js'},
        resolve: { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        output:{
            path: path.join(__dirname,output),
            filename:'[name].js',
            publicPath: 'dist/'
        }
    } 
    return [client];
}