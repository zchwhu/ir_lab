/**
 * Created by Administrator on 2017/4/25.
 */
var gulp = require('gulp');
var gulpLess = require('gulp-less');
var gulpMinifyCss = require('gulp-minify-css');
var gulpSourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('allLess', function(){
    gulp.src('css/less/*.less')
        .pipe(gulpSourcemaps.init())//sourcemaps
        .pipe(gulpLess())//编译less
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest('css/'))
        .pipe(gulpMinifyCss())//压缩css
        .pipe(gulpSourcemaps.write())
        // .pipe(gulp.dest('css/'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulpSourcemaps.write())
        .pipe(gulp.dest('css/'));
});

gulp.task('lessWatcher', function () {
    gulp.watch(['css/less/*.less','css/components/*less'], ['allLess']);
});


gulp.task('default', ['allLess','lessWatcher']);

