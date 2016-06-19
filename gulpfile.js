var gulp = require('gulp');

const browserSync = require('browser-sync').create();
const siteRoot = './';

gulp.task('default', function() {
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: siteRoot
        }
    }); 
});  

gulp.task('default', ['serve']);
