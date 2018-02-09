var path = require('path');

module.exports = {
  production: {
    modules: [
      path.resolve(__dirname, '..', '..', 'resources', 'assets'),
      path.resolve(
        __dirname,
        '..',
        '..',
        'resources',
        'assets',
        'component-library'
      ),
      path.resolve(
        __dirname,
        '..',
        '..',
        'resources',
        'assets',
        'component-library',
        'src'
      ),
      'node_modules'
    ],
    alias: {
      TweenLite: path.resolve(
        'node_modules',
        'gsap/src/minified/TweenLite.min.js'
      ),
      TweenMax: path.resolve(
        'node_modules',
        'gsap/src/minified/TweenMax.min.js'
      ),
      TimelineMax: path.resolve(
        'node_modules',
        'gsap/src/minified/TimelineMax.min.js'
      ),
      TimelineLite: path.resolve(
        'node_modules',
        'gsap/src/minified/TimelineLite.min.js'
      ),
      'animation.gsap': path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
      ),
      ScrollMagic: path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
      ),
      'redux-api-actions': path.resolve(
        'node_modules',
        'redux-api-actions/dist/redux-api-actions.js'
      ),
      'redux-inventory': path.resolve(
        'node_modules',
        'redux-inventory/dist/redux-inventory.js'
      ),
      'npm:mo-js': path.resolve('node_modules', 'mo-js/build/mo.min.js')
    }
  },
  development: {
    modules: [
      path.resolve(__dirname, '..', '..', 'resources', 'assets'),
      path.resolve(
        __dirname,
        '..',
        '..',
        'resources',
        'assets',
        'component-library'
      ),
      path.resolve(
        __dirname,
        '..',
        '..',
        'resources',
        'assets',
        'component-library',
        'src'
      ),
      'node_modules'
    ],
    alias: {
      TweenLite: path.resolve(
        'node_modules',
        'gsap/src/minified/TweenLite.min.js'
      ),
      TweenMax: path.resolve(
        'node_modules',
        'gsap/src/minified/TweenMax.min.js'
      ),
      TimelineMax: path.resolve(
        'node_modules',
        'gsap/src/minified/TimelineMax.min.js'
      ),
      TimelineLite: path.resolve(
        'node_modules',
        'gsap/src/minified/TimelineLite.min.js'
      ),
      'animation.gsap': path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js'
      ),
      ScrollMagic: path.resolve(
        'node_modules',
        'scrollmagic/scrollmagic/uncompressed/ScrollMagic.js'
      ),
      'npm:mo-js': path.resolve('node_modules', 'mo-js/build/mo.js')
    }
  }
};
