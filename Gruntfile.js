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

      uglify: {
        files: ['src/js/*.js'],
        tasks: ['uglify']
      },
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
              'src/lib/jquery.min.js',
              'src/lib/noframework.waypoints.js',
              'src/lib/animsition.js',
              'src/js/project-atop.js',
              'src/js/nav.js'
              ],
        dest: 'src/js/main.js',
      },
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/main.js',
        dest: 'dist/js/main.min.js'
      }
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

    jade: {
      compile: {
        options: {
          pretty: false,
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

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', [ 'concat', 'uglify', 'jade', 'sass', 'imagemin' ]);

};
