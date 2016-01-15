import fs from 'fs'
import iofs from 'io.filesystem'
import { green, yellow } from 'chalk'
import { resolve } from 'path'
import { stdout } from 'process'

const scaffolds = resolve(__dirname,'../../scaffolds')
const ls = iofs(fs).listDirectory(scaffolds)

ls.fork(
  function(error) {
      throw error
  },

  function(data) {
      const scaffolds = yellow(data.reduce((acc, el) => acc.concat(`${el}\n`), '\n'))

      stdout.write(green(`\nFound ${data.length} scaffold${data.length === 1 ? '' : 's'}:\n`))
      stdout.write(`${scaffolds}\n`)
  }
)

export default function(yargs) {
    return yargs
        .usage('\nUsage: js ls')
        .demand(0)
        .alias('h', 'help')
        .help('h')
        .argv
}