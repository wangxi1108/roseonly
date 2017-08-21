
var gulp = require("gulp");
var sass = require("gulp-sass-china");
var scsslint = require("gulp-scss-lint")

// gulp.task('sass', function (){
//     gulp.src('sass/*.scss')
//         .pipe(sass({
//             outputStyle: 'compact'
//         })
//             .on('error', sass.logError))

//         .pipe(gulp.dest('/dist'));
// });
	gulp.task("scsslint",function(){
		return gulp.src("sass/*.scss")
		.pipe(scsslint()).pipe(gulp.dest("./css"))
	})
gulp.task('default', ['scsslint']);

