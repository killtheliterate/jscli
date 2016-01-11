import vfs from 'vinyl-fs'
import template from 'gulp-template'

export default (scaffold, options, out) => new Promise((resolve, reject) => {
    vfs.src(scaffold)
        .pipe(template(options))
        .pipe(vfs.dest(out))
        .on('error', reject)
        .on('finish', () => {
            resolve(out)
        })
})
