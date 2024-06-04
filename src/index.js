import fs from 'fs';
import path from 'path';
import process from 'process';
import getFileInfo from './parsing.js';
import stringifyComparedData from './compareData.js';

//const user = '/Users/ZARINA/fullstack-javascript-project-46/__fixtures__/file1.json';

// получаю полный путь до файла
//process.cwd() - возвращает директорию из которой запуoty node.js файл.
const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
//console.log(getFilePath(user));
// result: /Users/ZARINA/fullstack-javascript-project-46/__fixtures__/file1.json
// чтение фала: использую функцию fs.readFileSync(path[, options]) - path беру из getFilePath, также
// дополнительно использую options-кодировку <utf-8>
const readFile = (filepath) => fs.readFileSync(getFilePath(filepath), 'utf-8');
//console.log(readFile(user));
// result: {
//"host": "hexlet.io",
//"timeout": 50,
//"proxy": "123.234.53.22",
//"follow": false
//}
// определяем формат файла
const getFormat = (filepath) => path.extname(filepath);
//console.log(getFormat(user));
//result: .json

// основная функция приложения genDiff => чтение файлов -> парсинг -> сравнение файлов с выводом строки
const genDiff = (filepath1, filepath2) => {
  const getDataFromFilepath1 = readFile(filepath1);
  const getDataFromFilepath2 = readFile(filepath2);
  const getObjectFromFile1 = getFileInfo(getDataFromFilepath1, getFormat(filepath1));
  const getObjectFromFile2 = getFileInfo(getDataFromFilepath2, getFormat(filepath2));
  const result = stringifyComparedData(getObjectFromFile1, getObjectFromFile2);
  return result;
};

export default genDiff;
