module.exports = {
  devtool: 'inline-source-map',
  entry: {
    application: './frontend/assets/javascripts/application.tsx'
  },
  output: {
    path: `${__dirname}/../../../app/assets/javascripts`,
    filename: '[name].bundle.js'
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: [
          {loader: 'ts-loader'}
        ]
      }, {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel?presets[]=react,presets[]=es2015,presets[]=stage-2'
      }
    ]
  }
};
