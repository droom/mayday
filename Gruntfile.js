module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: [
        'src/sass/*.sass',
        'src/sass/lib/*.sass',
        'src/sass/partials/*',
        'src/sass/projects/*',
        'src/sass/projects/at/*',
        'src/sass/projects/ih/*',
        'src/sass/projects/gg/*',
        'src/sass/projects/gr/*',
        'src/sass/projects/gg/views/*',
        'src/sass/projects/shared/*',
        'src/sass/a11y/*',
        'src/sass/components/*',
        'src/sass/grid/*',
        'src/sass/type/*',
        'src/sass/motion/*',
        'src/sass/images/*',
        'src/sass/rhythm/*'
        ],
        tasks: ['sass'],
      },

      jade: {
        files: [
        'src/jade/*.jade', 
        'src/jade/partials/*',
        'src/jade/projects/*',
        'src/jade/projects/gr/*',
        'src/jade/projects/ih/*',
        'src/jade/projects/shared/*',
        'src/jade/projects/gg/*',
        'src/jade/intro/*'
        ],
        
        tasks: ['jade'],
      },

      concat: {
        files: [
        'src/js/*.js'
        ],
        tasks: ['concat']
      },

      postcss: {
        files: ['dist/css/screen.css'],
        tasks: ['postcss']
      },

      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },

    },


    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'dist/css/screen.css': 'src/sass/screen.sass',
          'dist/css/print.css': 'src/sass/print.sass',

        }
      }
    },


    postcss: {
      options: {
        map: false,
        map: {
          inline: false,
          annotation: 'dist/css/maps/'
        },
        processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({add: false, browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/screen.css'
      }
    },

    jade: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: true,
            timestamp: "<%= new Date().getTime() %>"
          }
        },
        files: [{
          expand: true,
          cwd: 'src/jade',
          src: [ '*.jade' ],
          dest: 'dist/',
          ext: '.html'
        }]
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/img/',
          src: ['**/*.{png,jpg,gif,svg}'],
          dest: 'dist/img/'
        }]
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
        'src/lib/jquery.js',
        'src/lib/easing.js',
        'src/lib/slick.js',
        'src/lib/jquery.waypoints.js',
        // 'src/lib/modernizr-2.8.3.min.js',
        'src/lib/modernizr-custom.js',
        // 'src/lib/isotope.js',
        'src/lib/konami.js',
        'src/js/*.js'
        // 'src/lib/css-polyfills.min'

        ],
        dest: 'dist/js/droomio.js',
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/js/droomio.js',
        dest: 'dist/js/droomio.min.js'
      }
    },

    critical: {
      options: {
        base: './',
        css: [
        'dist/css/style.css'
        ],
        width: 1400,
        height: 1200,
        minify: true,

        excludeSelectors: [
        'html, body, div'
        ],

      },

      src: 'dist/*.html',
      dest: 'dist/critical/'
    },


    yslow: {
      options: {
        thresholds: {
          weight: 180,
          speed: 1000,
          score: 80,
          requests: 15
        }
      },
      pages: {
        files: [
        {
          src: 'dist/'
        },
        {
          src: 'http://droom.io',
          thresholds: {
            weight: 100
          }
        }
        ]
      }
    },


  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-critical');
  grunt.loadNpmTasks('grunt-yslow');

  grunt.registerTask('default', [ 'concat', 'uglify', 'jade', 'sass', 'postcss', 'imagemin', 'critical' ]);

};
