// В данном модуле реализуется парсинг файла с учетом формата
// из JSON или YAML получаем -> объект

// JSON.parse() уже встроен в Node.js
// импортируем (load) для YAML
import load from 'js-yaml';

const getFileParser = (data, format) => {
  switch (format) {
    case '.json':
      return JSON.parse(data);
    case '.yaml' || '.yml':
      return load(data);
  }
};

export default getFileParser;
