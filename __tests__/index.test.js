import * as fs from 'node:fs';
import * as path from 'node:path';
import { fileURLToPath } from 'url';
import { test, expect, describe } from '@jest/globals';
import genDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
