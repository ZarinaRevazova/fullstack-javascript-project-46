#!/usr/bin/env node

import { Command } from 'commander';
const program = new Command();

import genDiff from '../src/index.js';

program
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
    console.log(genDiff(filepath1, filepath2)); // далее, тут будет еще один аргумент - format (.options),
    //и в основную ф-ю его также добавить!!!
  });

program.parse();
