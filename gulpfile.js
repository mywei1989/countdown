var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

var fs = require('fs');
var header  = require('gulp-header');


var getCopyright = function(){
  return fs.readFileSync('./copyright.js');
};




gulp.task('countdown_clean',function(){
  return gulp.src(['./dist/jquery-countdown.min.js'],{read:false})
        .pipe(clean({force:true}));
});

gulp.task('countdown_js',['countdown_clean'],function(){
  return gulp.src(['./jquery-countdown.js'])
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(header(getCopyright()))
        .pipe(gulp.dest('./dist'));
});

gulp.task('countdown-mobile_clean',function(){
  return gulp.src(['./dist/zepto-countdown-mobile.min.js'],{read:false})
        .pipe(clean({force:true}));
});

gulp.task('countdown-mobile_js',['countdown-mobile_clean'],function(){
  return gulp.src(['./zepto-countdown-mobile.js'])
        .pipe(rename({suffix:'.min'}))
        .pipe(uglify())
        .pipe(header(getCopyright()))
        .pipe(gulp.dest('./dist'));
});


gulp.task('default',['countdown_js','countdown-mobile_js']);