// В данном модуле реализуется парсинг файла с учетом формата
// из JSON или YAML получаем -> объект

// JSON.parse() уже встроен в Node.js
// импортируем (load) для YAML
import load from 'js-yaml';

const getFileInfo = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml':
      return load(data);
    case '.yml':
      return load(data);
    default:
      throw new Error(`Invalid extension - ${format}`);
  }
};

export default getFileInfo;
