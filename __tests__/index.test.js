import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';

//fileURLToPath преобразует файловый URL в путь к файлу.
//Она обеспечивает корректное декодирование символов и возвращает
//абсолютный путь к файлу, подходящий для конкретной платформы.
//__dirname - возвращает путь к каталогу текущего исполняемого файла.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// path.join() объединяет все заданные сегменты path вместе
const getFixtureFilePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const readFixtureFile = (filename) => fs.readFileSync(getFixtureFilePath(filename), 'utf-8');

const basicFileFormat = ['json', 'yaml', 'yml'];
const outputFileFormat = ['stylish'];

test.each(basicFileFormat)('gendiff_test_format', (format) => {
  const filepath1 = getFixtureFilePath(`file1.${format}`);
  const filepath2 = getFixtureFilePath(`file2.${format}`);
  outputFileFormat.forEach((outputFileFormat) => {
    const expected = readFixtureFile(`expectedStringNestedFiles.txt`);
    const diffResult = genDiff(filepath1, filepath2, outputFileFormat);
    expect(diffResult).toBe(expected);
  });
});

//
//
//
//
//
//const tests = [
//{
//file1: 'file1.json',
//file2: 'file2.json',
//output: 'outputFile1and2JSON.txt',
//},
//];
//test.each(tests)('gendiff_test_JSON', ({ file1, file2, output }) => {
//const filepath1 = getFixtureFilePath(file1);
//const filepath2 = getFixtureFilePath(file2);
//const expected = readFixtureFile(output);
//const result = genDiff(filepath1, filepath2);
//expect(result).toBe(expected);
//});

//node-options=--no-warnings --experimental-vm-modules

//gendiff __fixtures__/file1.yaml __fixtures__/file2.yaml
