module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      options: {
        livereload: true,
      },
      sass: {
        files: [
        'src/sass/*.sass',
        'src/sass/partials/*.sass',
        'src/sass/projects/*.sass'
        ],
        tasks: ['sass'],
      },

      jade: {
        files: ['src/jade/*.jade', 'src/jade/partials/*.jade'],
        tasks: ['jade'],
      },

      concat: {
        files: ['src/js/*.js'],
        tasks: ['concat']
      },

      postcss: {
        files: ['dist/css/style.css'],
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
          'dist/css/style.css': 'src/sass/style.sass',
        }
      }
    },


    postcss: {
      options: {
      map: true, // inline sourcemaps

      // or
      map: {
          inline: false, // save all sourcemaps as separate files...
          annotation: 'dist/css/maps/' // ...to the specified directory
        },

        processors: [
        require('pixrem')(), // add fallbacks for rem units
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'dist/css/style.css'
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
          dest: 'dist',
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
          dest: 'dist/img'
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
        'src/lib/modernizr-2.8.3.min.js',
        'src/lib/easing.js',
        'src/lib/noframework.waypoints.js',
        'src/js/project-atop.js',
        'src/js/waypoints.js',
        'src/js/context.js',
        'src/js/nav.js',
        'src/js/cover.js'
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
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-postcss');


  grunt.registerTask('default', [ 'concat', 'uglify', 'jade', 'sass', 'postcss', 'imagemin' ]);

};
