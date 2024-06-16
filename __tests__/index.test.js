import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { test, expect, describe } from '@jest/globals';
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

const inputFormat = ['json', 'yaml', 'yml'];

describe('gendiff_testing', () => {
  test.each(inputFormat)('gendiff_test_format', (format) => {
    const filepath1 = getFixtureFilePath(`file1.${format}`);
    const filepath2 = getFixtureFilePath(`file2.${format}`);
    expect(genDiff(filepath1, filepath2)).toBe(readFixtureFile('stylishExpectedString.txt'));
    expect(genDiff(filepath1, filepath2, 'stylish')).toBe(readFixtureFile('stylishExpectedString.txt'));
    expect(genDiff(filepath1, filepath2, 'plain')).toBe(readFixtureFile('plainExpectedString.txt'));
    expect(genDiff(filepath1, filepath2, 'json')).toBe(readFixtureFile('jsonExpectedString.txt'));
  });
});
