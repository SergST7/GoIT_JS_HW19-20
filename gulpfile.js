/**
 * Created by SergST on 28.09.2016.
 */

var gulp = require('gulp'); // Подключаем Gulp
var sass = require('gulp-sass'); // Подключаем Sass пакет

var concat = require('gulp-concat');
var minify = require('gulp-minify');
var minifyCss = require('gulp-clean-css');
var imagesMin = require('gulp-image');

//  объект с данными о путях
var CONFIG = {
	src: {
		html: 'src/*.html',
		styles: 'src/style/css/*.css',
		scripts: [
			'src/scripts/jquery-3.1.0.js',
			'src/scripts/owl.carousel.js',
			'src/scripts/data.json.js',
			'src/scripts/lodash.js',
			'src/scripts/main.js'
		],
		images: 'src/images/*.*'
	},
	build: {
		html: 'build/',
		css: 'build/style/css/',
		js: 'build/scripts/',
		images: 'build/images/'
	}
};

// задача по умолчанию
gulp.task('default', ['build'], function () {
	console.log('default task build - ok');
});


//SASS
gulp.task('sass', function() { // Создаем таск "sass"
	return gulp.src(['src/style/sass/*.sass', 'src/style/sass/*.scss']) // Берем источник
		.pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError)) // Преобразуем Sass в CSS посредством gulp-sass
		.pipe(gulp.dest('src/style/css')); // Выгружаем результата в папку css
});

gulp.task('watch', function() {
	gulp.watch(['src/style/sass/*.sass', 'src/style/sass/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});


//BUILD

// задача по сборке картинок
gulp.task('images', function () {
	return gulp.src(CONFIG.src.images)
		.pipe(imagesMin())
		.pipe(gulp.dest(CONFIG.build.images));
});

// задача по сборке стилей
gulp.task('styles', function () {
	return gulp.src(CONFIG.src.styles)
		.pipe(concat('style.css'))
		.pipe(minifyCss({compatibility: 'ie8'}))
		.pipe(gulp.dest(CONFIG.build.css));
});

// задача по сборке скриптов
gulp.task('scripts', function () {
	return gulp.src(CONFIG.src.scripts)
		.pipe(concat('main.js'))
		.pipe(minify({
			ext: {
				min: '.min.js'
			}
		}))
		.pipe(gulp.dest(CONFIG.build.js));
});

// задача сборки проекта, до запуска build будут выполнены задачи из массива
gulp.task('build', ['scripts', 'styles', 'images'], function () {
	console.log('builded!');
});




