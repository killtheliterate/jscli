#!/usr/bin/env node

import yargs from 'yargs'

import init from './commands/init'

yargs
  .usage('\nUsage: js <command>')
  .command('init', 'Initialize a new JavaScript project', init)
  .demand(1)
  .help('h')
  .alias('h', 'help')
  .argv;
