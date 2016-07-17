/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var autoprefix = require('gulp-autoprefixer');
var cssclean = require('gulp-clean-css');
var htmlclean = require('gulp-minify-html');
var htmlreplace = require('gulp-html-replace');

gulp.task('default', ['jshint', 'appjsbuild', 'libjsbuild', 'stylesbuild', 'indexbuild', 'htmlbuild', 'copyimages', 'copydata']);

gulp.task('jshint', function () {
    gulp.src(['./app/app/app.module.js', './app/app/app.config.js', './app/app/**/*.module.js', './app/app/**/*.component.js'])
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
});

gulp.task('appjsbuild', function() {
    gulp.src(['./app/app/app.module.js', './app/app/app.config.js', './app/app/**/*.module.js', './app/app/**/*.component.js'])
            .pipe(concat('appscripts.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./build/assets/scripts'));
});

gulp.task('libjsbuild', function() {
    gulp.src(['./app/bower_components/jquery/dist/jquery.min.js', './app/bower_components/angular/angular.js', './app/bower_components/angular-route/angular-route.js', './app/bower_components/angular-animate/angular-animate.min.js', './app/bower_components/angular-google-analytics/dist/angular-google-analytics.js'])
            .pipe(concat('libscripts.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./build/assets/scripts'));
});

gulp.task('stylesbuild', function() {
  gulp.src(['./app/bower_components/bootstrap/dist/css/bootstrap.min.css', './app/bower_components/bootstrap/dist/css/bootstrap-theme.min.css', './app/assets/styles/*.css'])
    .pipe(concat('style.css'))
    .pipe(autoprefix('last 2 versions'))
    .pipe(cssclean())
    .pipe(gulp.dest('./build/assets/style'));
});

gulp.task('indexbuild', function () {
    gulp.src(['./app/index.html'])
            .pipe(htmlreplace({
                css: '/assets/style/style.css',
                lib: '/assets/scripts/libscripts.js',
                js: '/assets/scripts/appscripts.js'
            }))
            .pipe(htmlclean())
            .pipe(gulp.dest('./build'));
});

gulp.task('htmlbuild', function() {
    gulp.src(['./app/app/**/*.html'])
                .pipe(htmlclean())
                .pipe(gulp.dest('./build/app'));
});

gulp.task('copyimages', function () {
    gulp.src(['./app/assets/images/*'])
            .pipe(gulp.dest('./build/assets/images'));
});

gulp.task('copydata', function () {
    gulp.src(['./app/assets/data/*.json'])
            .pipe(gulp.dest('./build/assets/data'));
});
