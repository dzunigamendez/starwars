const path = require('path');
const withPlugins = require('next-compose-plugins');
const withSass = require('@zeit/next-sass');
const globImporter = require('node-sass-glob-importer');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [
    withSass,
    {
      sassLoaderOptions: {
        includePaths: [path.resolve('scss'), path.resolve('node_modules')],
        importer: globImporter()
      }
    }
  ],
  [optimizedImages, {}]
]);
