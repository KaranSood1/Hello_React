module.exports = {
  entry : './public/app.jsx',
  output: {
    path:__dirname,
    filename: './public/bundle.js'
  },
  resolve:{
  //resolve takes extentions array

    extensions : ['.js','.jsx']
  },
  module:{
    loaders:[{
      loader:'babel-loader',
      query:{
        presets:['react','es2015']
      },
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/
    }
  ]
  }


};
