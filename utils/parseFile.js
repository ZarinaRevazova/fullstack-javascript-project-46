import fs from 'fs';
import process from 'process';
import path from 'path';
import yaml from 'js-yaml';

const readJsonFile = path.resolve(process.cwd(), '__fixtures__/file2.json');
const readFileForParse = yaml.load(fs.readFileSync(readJsonFile, 'utf-8'));
console.log(readFileForParse);
//const result = yaml.load(readFileForParse);
//console.log(JSON.parse(readFileForParse));
//console.log(yaml.load(readFileForParse));
