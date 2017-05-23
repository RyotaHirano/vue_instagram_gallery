import gulp from 'gulp';
import { if as IF } from '../plugins';
import { copy as conf, isProduction } from '../conf';

gulp.task('copy:venderCss', () => {
  return gulp.src(conf.venderCss.src)
    .pipe(IF(isProduction, gulp.dest(conf.venderCss.dst.build), gulp.dest(conf.venderCss.dst.dev)));
});

gulp.task('copy:venderJs', () => {
  return gulp.src(conf.venderJs.src)
    .pipe(IF(isProduction, gulp.dest(conf.venderJs.dst.build), gulp.dest(conf.venderJs.dst.dev)));
});

gulp.task('copy:img', () => {
  return gulp.src(conf.img.src)
    .pipe(gulp.dest(conf.img.dst));
});

gulp.task('copy:build', () => {
  return gulp.src(conf.build.src)
    .pipe(gulp.dest(conf.build.dst));
});

gulp.task('copy:data', () => {
  return gulp.src(conf.data.src)
    .pipe(IF(isProduction, gulp.dest(conf.data.dest.build), gulp.dest(conf.data.dest.dev)));
});
