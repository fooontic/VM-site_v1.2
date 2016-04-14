'use strict';

var gulp = require('gulp'),
	less = require('gulp-less'),
	path = require('path'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css');
	
gulp.task('console', function(){
	console.log('meow');
});


gulp.task('less', function() {
	return gulp.src('src/less/style.less')
		.pipe(less({
			paths: [path.join(__dirname, 'less', 'includes')]
		}))		
		.pipe(autoprefixer())
		.pipe(minifycss())
		.pipe(gulp.dest('build/css/'));
});

gulp.task('watch', function(){
	gulp.watch('src/less/*.less', [less]);
});