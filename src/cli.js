#!/usr/bin/env node

import yargs from 'yargs'

import init from './commands/init'

import {version} from '../package.json'

yargs
  .usage('\nUsage: js <command>')
  .version(version)
  .command('init', 'Initialize a new JavaScript project', init)
  .demand(1)
  .help('h')
  .alias('h', 'help')
  .argv;
