var gulp = require('gulp'), 
    uglify = require('gulp-uglifyjs'),
    svgSprite = require('gulp-svg-sprite'),
    svgo = require('gulp-svgo');

var config = {
     base_path: './',
}

// JS minification
var libs = [
config.base_path +'js/vendor/*.js',
config.base_path +'js/main.js',
];

gulp.task('uglify', function() {
  gulp.src(libs)
    .pipe(uglify('main.min.js'))
    .pipe(gulp.dest(config.base_path + 'js/'))
});

// SVG Spriting
sprite_config       = {
    "mode": {
        "css": {
            "render": {
                "scss": true
            },
            "dest" : "",
            "layout":"diagonal"
        }
    }
};

gulp.task('create-sprite', function() {
  gulp.src(config.base_path +'img/svg/sprite_src/*.svg')
      .pipe(svgo())
      .pipe(svgSprite(sprite_config))
      .pipe(gulp.dest(config.base_path +'css'));
});

  gulp.task('default', ['create-sprite','uglify']);
