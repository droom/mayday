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
        'src/lib/jquery.min.js',
        'src/lib/easing.js',
        'src/lib/noframework.waypoints.js',
        'src/lib/animsition.js',
        'src/lib/fontfaceobserver.standalone.js',
        'src/js/project-atop.js',
        'src/js/nav.js'
        ],
        dest: 'src/js/main.js',
      },
    },


    // modernizr: {
    //   "crawl": false,
    //   "customTests": [],
    //   "dest": "src/lib/modernizr-custom.js",
    //   "tests": [
    //   "ambientlight",
    //   "applicationcache",
    //   "audio",
    //   "batteryapi",
    //   "blobconstructor",
    //   "canvas",
    //   "canvastext",
    //   "contenteditable",
    //   "contextmenu",
    //   "cookies",
    //   "cors",
    //   "cryptography",
    //   "customprotocolhandler",
    //   "customevent",
    //   "dart",
    //   "dataview",
    //   "emoji",
    //   "eventlistener",
    //   "exiforientation",
    //   "flash",
    //   "forcetouch",
    //   "fullscreen",
    //   "gamepads",
    //   "geolocation",
    //   "hashchange",
    //   "hiddenscroll",
    //   "history",
    //   "htmlimports",
    //   "ie8compat",
    //   "indexeddb",
    //   "indexeddbblob",
    //   "input",
    //   "search",
    //   "inputtypes",
    //   "intl",
    //   "json",
    //   "ligatures",
    //   "olreversed",
    //   "mathml",
    //   "notification",
    //   "pagevisibility",
    //   "performance",
    //   "pointerevents",
    //   "pointerlock",
    //   "postmessage",
    //   "proximity",
    //   "queryselector",
    //   "quotamanagement",
    //   "requestanimationframe",
    //   "serviceworker",
    //   "svg",
    //   "templatestrings",
    //   "touchevents",
    //   "typedarrays",
    //   "unicoderange",
    //   "unicode",
    //   "userdata",
    //   "vibrate",
    //   "video",
    //   "vml",
    //   "webintents",
    //   "animation",
    //   "webgl",
    //   "websockets",
    //   "xdomainrequest",
    //   "adownload",
    //   "audioloop",
    //   "audiopreload",
    //   "webaudio",
    //   "lowbattery",
    //   "canvasblending",
    //   [
    //   "todataurljpeg",
    //   "todataurlpng",
    //   "todataurlwebp"
    //   ],
    //   [
    //   "canvaswinding"
    //   ],
    //   "getrandomvalues",
    //   "cssall",
    //   "cssanimations",
    //   "appearance",
    //   "backdropfilter",
    //   "backgroundblendmode",
    //   "backgroundcliptext",
    //   "bgpositionshorthand",
    //   "bgpositionxy",
    //   [
    //   "bgrepeatspace",
    //   "bgrepeatround"
    //   ],
    //   "backgroundsize",
    //   "bgsizecover",
    //   "borderimage",
    //   "borderradius",
    //   "boxshadow",
    //   "boxsizing",
    //   "csscalc",
    //   "checked",
    //   "csschunit",
    //   "csscolumns",
    //   "cubicbezierrange",
    //   "display-runin",
    //   "displaytable",
    //   "ellipsis",
    //   "cssescape",
    //   "cssexunit",
    //   "cssfilters",
    //   "flexbox",
    //   "flexboxlegacy",
    //   "flexboxtweener",
    //   "flexwrap",
    //   "fontface",
    //   "generatedcontent",
    //   "cssgradients",
    //   "csshairline",
    //   "hsla",
    //   [
    //   "csshyphens",
    //   "softhyphens",
    //   "softhyphensfind"
    //   ],
    //   "cssinvalid",
    //   "lastchild",
    //   "cssmask",
    //   "mediaqueries",
    //   "multiplebgs",
    //   "nthchild",
    //   "objectfit",
    //   "opacity",
    //   "overflowscrolling",
    //   "csspointerevents",
    //   "csspositionsticky",
    //   "csspseudoanimations",
    //   "csspseudotransitions",
    //   "cssreflections",
    //   "regions",
    //   "cssremunit",
    //   "cssresize",
    //   "rgba",
    //   "cssscrollbar",
    //   "scrollsnappoints",
    //   "shapes",
    //   "siblinggeneral",
    //   "subpixelfont",
    //   "supports",
    //   "target",
    //   "textalignlast",
    //   "textshadow",
    //   "csstransforms",
    //   "csstransforms3d",
    //   "preserve3d",
    //   "csstransitions",
    //   "userselect",
    //   "cssvalid",
    //   "cssvhunit",
    //   "cssvmaxunit",
    //   "cssvminunit",
    //   "cssvwunit",
    //   "willchange",
    //   "wrapflow",
    //   "classlist",
    //   [
    //   "createelementattrs",
    //   "createelement-attrs"
    //   ],
    //   "dataset",
    //   "documentfragment",
    //   "hidden",
    //   "microdata",
    //   "mutationobserver",
    //   "bdi",
    //   "datalistelem",
    //   "details",
    //   "outputelem",
    //   "picture",
    //   [
    //   "progressbar",
    //   "meter"
    //   ],
    //   "ruby",
    //   "template",
    //   "time",
    //   [
    //   "texttrackapi",
    //   "track"
    //   ],
    //   "unknownelements",
    //   "es5array",
    //   "es5date",
    //   "es5function",
    //   "es5object",
    //   "es5",
    //   "strictmode",
    //   "es5string",
    //   "es5syntax",
    //   "es5undefined",
    //   "es6array",
    //   "es6collections",
    //   "contains",
    //   "generators",
    //   "es6math",
    //   "es6number",
    //   "es6object",
    //   "promises",
    //   "es6string",
    //   [
    //   "devicemotion",
    //   "deviceorientation"
    //   ],
    //   "oninput",
    //   "filereader",
    //   "filesystem",
    //   "capture",
    //   "fileinput",
    //   "directory",
    //   "formattribute",
    //   "localizednumber",
    //   "placeholder",
    //   "requestautocomplete",
    //   "formvalidation",
    //   "sandbox",
    //   "seamless",
    //   "srcdoc",
    //   "apng",
    //   "imgcrossorigin",
    //   "jpeg2000",
    //   "jpegxr",
    //   "sizes",
    //   "srcset",
    //   "webpalpha",
    //   "webpanimation",
    //   [
    //   "webplossless",
    //   "webp-lossless"
    //   ],
    //   "webp",
    //   "inputformaction",
    //   "inputformenctype",
    //   "inputformmethod",
    //   "inputformtarget",
    //   "beacon",
    //   "lowbandwidth",
    //   "eventsource",
    //   "fetch",
    //   "xhrresponsetypearraybuffer",
    //   "xhrresponsetypeblob",
    //   "xhrresponsetypedocument",
    //   "xhrresponsetypejson",
    //   "xhrresponsetypetext",
    //   "xhrresponsetype",
    //   "xhr2",
    //   "scriptasync",
    //   "scriptdefer",
    //   "speechrecognition",
    //   "speechsynthesis",
    //   "localstorage",
    //   "sessionstorage",
    //   "websqldatabase",
    //   "stylescoped",
    //   "svgasimg",
    //   "svgclippaths",
    //   "svgfilters",
    //   "svgforeignobject",
    //   "inlinesvg",
    //   "smil",
    //   "textareamaxlength",
    //   "bloburls",
    //   "datauri",
    //   "urlparser",
    //   "videoautoplay",
    //   "videoloop",
    //   "videopreload",
    //   "webglextensions",
    //   "datachannel",
    //   "getusermedia",
    //   "peerconnection",
    //   "websocketsbinary",
    //   [
    //   "atobbtoa"
    //   ],
    //   "framed",
    //   "matchmedia",
    //   "blobworkers",
    //   "dataworkers",
    //   "sharedworkers",
    //   "transferables",
    //   "webworkers"
    //   ],
    //   "options": [
    //   "domPrefixes",
    //   "prefixes",
    //   "addTest",
    //   "atRule",
    //   "hasEvent",
    //   "mq",
    //   "prefixed",
    //   "prefixedCSS",
    //   "prefixedCSSValue",
    //   "testAllProps",
    //   "testProp",
    //   "testStyles",
    //   "html5shiv",
    //   "setClasses"
    //   ],
    //   "uglify": true
    // },



    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/js/main.js',
        dest: 'dist/js/main.min.js'
      }
    }

  });

grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-imagemin');

grunt.registerTask('default', [ 'concat', 'uglify', 'jade', 'sass', 'imagemin' ]);

};
