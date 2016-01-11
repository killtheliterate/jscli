import {resolve} from 'path'

import {readFile} from 'fs'
import vfs from 'vinyl-fs'

import {green, red} from 'chalk'

import generator from '../generator'
import canOverwrite from '../util/can-overwrite'
import spawn from '../util/blind-spawn'

const SCAFFOLD_DIR = resolve(__dirname, '../../scaffolds')

const copy = (here, there) => new Promise(function (resolve, reject) {
    vfs.src(here).pipe(vfs.dest(there))
        .on('error', reject)
        .on('finish', resolve)
})

const read = path => new Promise(function (resolve, reject) {
    readFile(path, 'utf8', function (err, file) {
        if (err) return reject(err)
        return resolve(file)
    })
})

export default yargs => {
    // CLI
    // ------------------------------------------------------------------------
    const argv = yargs
        .usage('\nUsage: javascript init <scaffold> [OPTIONS]')
        .demand(2)
        .option('out', {
            alias: 'o',
            describe: 'The path to which the project will be initialized. ' + 'Defaults to the current directory.'
        })
        .example('javascript init module -o path/to/my-module')
        .help('h')
        .alias('h', 'help')
        .argv

    // The magic
    // ------------------------------------------------------------------------
    const scaffoldName = argv._[1]
    const scaffold = resolve(SCAFFOLD_DIR, scaffoldName)
    const pack = resolve(scaffold, 'package.json')

    canOverwrite(argv.out)
        .then(can => {
            if (!can) throw new Error('Refusing to overwrite existing directory.')
        })
        .then(() => spawn('rm', ['-rf', resolve(argv.out)]))
        .then(() => spawn('mkdir', ['-p', resolve(argv.out)]))
        .then(() => copy(pack, resolve(argv.out)))
        .then(() => spawn('npm', ['init'], {
            cwd: resolve(argv.out),
            stdio: [process.stdin, process.stdout]
        }))
        .then(() => read(resolve(argv.out, 'package.json')))
        .then(JSON.parse)
        .then(options => generator([
            scaffold + '/**/*',
            '!**/package.json'
        ], options, argv.out))

        .then(out => {
            process.stdout.write(
`
Project created at ${green(resolve(out))}
`
            )
        })
        .catch(function (e) {
            process.stderr.write(
`
${red(e.message)}

${e.stack}
`
            )
        })

}
