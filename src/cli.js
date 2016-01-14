#!/usr/bin/env node

import yargs from 'yargs'

import init from './commands/init'
import Update from 'update-notifier'

import pkg from '../package.json'

const update = Update({pkg})
update.notify()

yargs
  .usage('\nUsage: js <command>')
  .version(pkg.version)
  .command('init', 'Initialize a new JavaScript project', init)
  .demand(1)
  .help('h')
  .alias('h', 'help')
  .argv;
