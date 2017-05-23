import gulp from 'gulp';
import { imagemin, rename } from '../plugins';
import { imagemin as conf } from '../conf';

gulp.task('imagemin:build', () => {
  return gulp.src(conf.build.src)
    .pipe(imagemin(conf.build.opts))
    .pipe(rename(path => {
      path.dirname = path.dirname.replace('img', '.');
    }))
    .pipe(gulp.dest(conf.build.dst));
});
