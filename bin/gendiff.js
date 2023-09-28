#!/usr/bin/env node

import { program } from 'commander';
import getContent from '../src/index.js';

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-v, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath1> <filepath2>', 'path to the files')
  .action((filepath1, filepath2) => {
    console.log('filepath1:', filepath1);
    console.log('filepath2:', filepath2);
    getContent(filepath1, filepath2).map((file) => console.log(file));
  });

program.parse();
