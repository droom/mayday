module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
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


      sass: {
        files: [
        'src/sass/*.sass'
        ],
        tasks: ['sass'],
      },

      concat: {
        files: [
        'src/js/*.js'
        ],
        tasks: ['concat']
      },

      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },

      postcss: {
        files: ['dist/css/screen.css'],
        tasks: ['postcss']
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
        map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'dist/css/maps/' // ...to the specified directory
        },

        processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 3 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/*.css'

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
        'src/lib/konami.js',
        'src/js/*.js'
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


  });


  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('default', [ 'concat', 'uglify', 'jade', 'sass', 'postcss' ]);

};
