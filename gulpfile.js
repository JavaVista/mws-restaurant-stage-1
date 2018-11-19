const gulp = require('gulp');
const responsive = require('gulp-responsive');

gulp.task('default', function() {
  return gulp
    .src('img/*.jpg')
    .pipe(
      responsive({
        // resize all JPG images to 4 different sizes
        '*.jpg': [
          {
            width: 300,
            quality: 40,
            rename: { suffix: '-300' }
          },
          {
            width: 400,
            quality: 40,
            rename: { suffix: '-400' }
          },
          {
            width: 600,
            quality: 40,
            rename: { suffix: '-600_2x' }
          },
          {
            width: 800,
            quality: 40,
            rename: { suffix: '-800_2x' }
          },
          {
            // Compress, strip metadata, and rename original image
            rename: { suffix: '-original' }
          }
        ]
      })
    )
    .pipe(gulp.dest('img/src'));
});
