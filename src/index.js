import fs from 'fs';
import path from 'path';
import process from 'process';
import getFileInfo from './parsing.js';

// получаю полный путь до файла
const getFilePath = (filepath) => path.resolve(process.cwd(), filepath);
// чтение фала: использую функцию fs.readFileSync(path[, options]) - path беру из getFilePath, также
// дополнительно использую options-кодировку <utf-8>
const readFile = (filepath) => fs.readFileSync(getFilePath(filepath), 'utf-8');
// определяем формат файла
const getFormat = (filepath) => path.extname(filepath);

// основная функция приложения genDiff => чтение файлов -> парсинг -> подготовка к их дальнейшему сравнению
const genDiff = (filepath1, filepath2) => {
  const getDataFromFilepath1 = readFile(filepath1);
  const getDataFromFilepath2 = readFile(filepath2);
  const getObjectFromFile1 = getFileInfo(getDataFromFilepath1, getFormat(filepath1));
  const getObjectFromFile2 = getFileInfo(getDataFromFilepath2, getFormat(filepath2));
  console.log(getObjectFromFile1, getObjectFromFile2);
};

export default genDiff;
