import _ from 'lodash';

const compareData = (data1, data2) => {
  // слияние двух объектов и их сортировка по алфавиту
  const keys = _.sortBy(Object.keys({ ...data1, ...data2 }));
  // проходим по массиву ключей:
  // - вводим условия с возвратом нужных строк, получаем массив строк
  // - далее join() - массив строк переводим в тип string
  // - результат выводим по образцу из задания шаг 4
  const result = keys
    .map((key) => {
      if (!_.has(data2, key)) {
        return ` - ${key}: ${data1[key]}`;
      } else if (!_.has(data1, key)) {
        return ` + ${key}: ${data2[key]}`;
      } else if (!_.isEqual(data1[key], data2[key])) {
        return ` - ${key}: ${data1[key]}\n + ${key}: ${data2[key]}`;
      } else {
        return `   ${key}: ${data1[key]}`;
      }
    })
    .join('\n');
  return `{
${result}
}`;
};

export default compareData;
