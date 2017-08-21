var gulp = require("gulp");
var connect = require("gulp-connect");
// var uglify = require("gulp-uglify");
// var mincss = require("gulp-minify-css");
// var img = require("gulp-imagemin");
// var html = require("gulp-minify-html");
var sass = require("gulp-sass");
// gulp.task("copy-html",function(){
// 	return gulp.src("*.html")
// 	.pipe(html())
// 	.pipe(gulp.dest("dits"))
// 	.pipe(connect.reload())  //自动刷新
//   //提醒任务完成
// })
// gulp.task("copy-html1",function(){
// 	return gulp.src("html/*.html")
// 	.pipe(html())
// 	.pipe(gulp.dest("dits"))
// 	.pipe(connect.reload())  //自动刷新
//   //提醒任务完成
// })
// gulp.task("copy-css",function(){
// 	return gulp.src("css/*.css")
// 	.pipe(mincss())
// 	.pipe(gulp.dest("dits/css"))
// 	.pipe(connect.reload()) 
// })
// gulp.task("copy-js",function(){
// 	return gulp.src("js/*.js")
// 	.pipe(uglify())
// 	.pipe(gulp.dest("dits/js"))
// 	.pipe(connect.reload()) 
// })
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css/'));
});


gulp.task("server",function(){
	connect.server({
		port:8222,
		liverload:true
	})
})

gulp.task("watch",function(){
	// gulp.watch("*.html",["copy-html"])
	gulp.watch("sass/.scss",["copy-sass"])
	// gulp.watch("css/*.css",["copy-css"])
	// gulp.watch("js/*.js",["copy-js"])
	// gulp.watch("images/*.{jpg,png}",["copy-img"])
})
gulp.task("default",["server","watch"])
