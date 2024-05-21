import _ from 'lodash';

const compareData = (data1, data2) => {
  // слияние двух объектов и их сортировка по алфавиту
  const keys = _.sortBy(Object.keys({ ...data1, ...data2 }));
  // получаем массив, содержащий объекты с описанием (type, key, value) в зависимости от принадлежности к одному из
  // файлов, равенству или неравенству значений
  const result = keys.map((key) => {
    if (!_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    } else if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    } else if (!_.isEqual(data2[key], data1[key])) {
      return { type: 'changed', key, value1: data1[key], value2: data2[key] };
    } else {
      return { type: 'unchanged', key, value1: data1[key] };
    }
  });
  return result;
};

const stringifyComparedData = (data1, data2) => {
  // получаем массив (в нем каждый элемент - это объект с описанием)
  const arr = compareData(data1, data2);
  // проходим по массиву:
  // - вводим условия с возвратом нужных строк, получаем массив строк
  // - далее join() - массив строк переводим в тип string
  // - результат выводим по образцу из задания шаг 4
  const result = arr.map((item) => {
    if (item.type === 'added') {
      return ` + ${item.key}: ${item.value}`;
    } else if (item.type === 'deleted') {
      return ` - ${item.key}: ${item.value}`;
    } else if (item.type === 'changed') {
      return ` - ${item.key}: ${item.value1}\n + ${item.key}: ${item.value2}`;
    } else if (item.type === 'unchanged') {
      return `   ${item.key}: ${item.value1}`;
    }
  });
  return `{\n${result.join('\n')}\n}`;
};

export default stringifyComparedData;

//const compareData = (data1, data2) => {
// слияние двух объектов и их сортировка по алфавиту
//const keys = _.sortBy(Object.keys({ ...data1, ...data2 }));
// проходим по массиву ключей:
// - вводим условия с возвратом нужных строк, получаем массив строк
// - далее join() - массив строк переводим в тип string
// - результат выводим по образцу из задания шаг 4
// const result = keys
//.map((key) => {
//if (!_.has(data2, key)) {
//return ` - ${key}: ${data1[key]}`;
//} else if (!_.has(data1, key)) {
//return ` + ${key}: ${data2[key]}`;
//} else if (!_.isEqual(data1[key], data2[key])) {
//return ` - ${key}: ${data1[key]}\n + ${key}: ${data2[key]}`;
//} else {
//return `   ${key}: ${data1[key]}`;
//}
//})
//.join('\n');
//return `{
//${result}
//}`;
//};
