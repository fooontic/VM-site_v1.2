var gulp = require('gulp'),
	config = require('./config'),
	imagemin = require('gulp-imagemin'), // Optimize images
	size = require('gulp-size'); // Display the size of something



/* Images */
gulp.task('images', function () {
	return gulp.src(pathTo.Src.Images)
		.pipe(imagemin({
			progressive: true,
			optimizationLevel: 5,
			use: [pngquant()],
			interlaced: true
		}))
		.pipe(size({
			title: 'Images'
		}))
		.pipe(gulp.dest(pathTo.Build.Images))
		.pipe(reload({stream: true}));
});