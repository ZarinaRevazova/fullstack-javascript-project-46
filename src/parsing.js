// В данном модуле реализуется парсинг файла с учетом формата
// из JSON или YAML получаем -> объект

import fs from 'fs';

// JSON.parse() уже встроен в Node.js
// импортируем (load) для YAML
import load from 'js-yaml';

const readFile = (filepath) => fs.readFileSync(getFilePath(filepath), 'utf-8');

const getFileParser = (data) => {
  const getDataPath = readFile(data);
  if (getDataPath.endsWith('.json')) {
    return JSON.parse(data);
  }
  if (getDataPath.endsWith('.yaml') || getDataPath.endsWith('.yaml')) {
    return load(data);
  }
};

export default getFileParser;
