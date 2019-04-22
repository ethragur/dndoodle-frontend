const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss');
const postcssImport = require('postcss-import');
module.exports = {
  plugins: [
    postcssImport,
    tailwindcss('./tailwind.js'),
    autoprefixer({
      add: true,
      grid: true
    }),
    // purgecss({
    //   content: ['./src/**/*.vue'],
    //   extractors: [
    //     {
    //       extractor: class TailwindExtractor {
    //         static extract(content) {
    //           return content.match(/[A-z0-9-:\/]+/g) || [];
    //         }
    //       },
    //       extensions: ['vue']
    //     }
    //   ]
    // }),
  ]
};
