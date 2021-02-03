const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: './dist/',
  },
  resolve: {
    alias: {
      mirador: path.resolve(__dirname, '..', 'node_modules', '@regang', 'mirador'),
      'mirador-image-tools': path.resolve(__dirname, '..', 'node_modules', '@regang', 'mirador-image-tools'),
    }
  }
};
