#!/usr/bin/env node

import yargs from 'yargs'

import Update from 'update-notifier'
import init from './commands/init'
import ls from './commands/ls'

import pkg from '../package.json'

const update = Update({pkg})
update.notify()

yargs
  .usage('\nUsage: jscli <command>')
  .version(pkg.version)
  .command('init', 'Initialize a new JavaScript project', init)
  .command('ls', 'List scaffolds', ls)
  .demand(1)
  .help('h')
  .alias('h', 'help')
  .argv;
