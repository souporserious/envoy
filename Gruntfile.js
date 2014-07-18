module.exports = function(grunt) {
  
  grunt.initConfig({
    concat: {
      dist: {
        src: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js', 'assets/js/build/jquery.fittext.js', 'assets/js/build/app.js'],
        dest: 'assets/js/built/app.min.js',
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/built/app.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },
    svgstore: {
      options: {
        svg: {
          style : 'display:none'
        }
      },
      default : {
          files: {
            'assets/img/icons.svg': ['assets/svgs/*.svg']
          },
      },
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'assets/css/main.css': 'assets/sass/main.scss'
        }
      }
    },
    watch: {
      concat: {
        files: ['bower_components/jquery/dist/jquery.js', 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js', 'assets/js/build/jquery.fittext.js','assets/js/build/app.js'],
        tasks: ['concat']
      },
      uglify: {
        files: 'assets/js/build/*.js',
        tasks: ['uglify']
      },
      svgs: {
        files: 'assets/svgs/*.svg',
        tasks: ['svgstore']
      },
      sass: {
        files: 'assets/sass/*.scss',
        tasks: ['sass'],
        options: {
          livereload: true
        }
      }
    }
  });

  // Load Plugins
  grunt.loadNpmTasks('grunt-svgstore');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('default', ['watch']);
};