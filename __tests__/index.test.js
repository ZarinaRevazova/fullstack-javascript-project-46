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

test('gendiff_test_JSON', () => {
  const data = { file1: 'file1.json', file2: 'file2.json', output: 'outputFile1and2JSON.txt' };
  const filepath1 = getFixtureFilePath(data.file1);
  const filepath2 = getFixtureFilePath(data.file2);
  const expected = readFixtureFile(data.output);
  expect(genDiff(filepath1, filepath2)).toBe(expected);
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
