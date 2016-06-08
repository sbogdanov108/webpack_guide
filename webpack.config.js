module.exports = {
  // входная точка нашего приложения
  entry : './main.js',
  output: {
    // результат работы Webpack будет в файле с таким именем
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loader : 'jshint-loader'
      }
    ],
    loaders: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loader : 'babel',
        query  : {
          presets: [ 'es2015' ]
        }
      },
      {
        test   : /\.css$/,
        exclude: /node_modules/,
        loader : 'style!css'
      },
      {
        test   : /\.scss$/,
        exclude: /node_modules/,
        loader : 'style!css!sass'
      },
      {
        test   : /\.(jpg|png|gif)$/,
        include: /images/,
        loader : 'url'
      }
    ]
  },
  jshint: {
    esversion: 6
  }
};