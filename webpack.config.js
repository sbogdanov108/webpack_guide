module.exports = {
  // входная точка нашего приложения
  entry : './main.js',
  output: {
    // результат работы Webpack будет в файле с таким именем
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test   : /\.js$/,
        exclude: /node_modules/,
        loader : 'babel',
        query  : {
          presets: [ 'es2015' ]
        }
      }
    ]
  }
};