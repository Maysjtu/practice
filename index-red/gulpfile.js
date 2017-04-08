var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    imagemin = require('gulp-imagemin'),
    del = require('del');

gulp.task('styles', function() {
  return sass('src/scss/*.scss', { style: 'expanded' })
    .pipe(autoprefixer('last 2 version'))
    .pipe(gulp.dest('static/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cssnano())
    .pipe(gulp.dest('static/css'));
});
gulp.task('images', function() {
  return gulp.src('src/img/**/*')
    .pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
    .pipe(gulp.dest('static/img'))
    .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {
    return del(['static']);
});
gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/scss/*.scss', ['styles']);

  // Watch image files
  gulp.watch('src/img/*', ['images']);

});
gulp.task('default',['clean','images','styles','watch']);

