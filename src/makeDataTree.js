import _ from 'lodash';

const compareData = (data1, data2) => {
  const keys = _.sortBy(Object.keys({ ...data1, ...data2 }));

  const result = keys.flatMap((key) => {
    if (_.isObject(data1[key]) && _.isObject(data2[key])) {
      return { type: 'nested', name: key, children: compareData(data1[key], data2[key]), };
    }
    if (!_.has(data2, key)) {
      return { type: 'deleted', name: key, value: data1[key] };
    }
    if (!_.has(data1, key)) {
      return { type: 'added', name: key, value: data2[key] };
    }
    if (!_.isEqual(data2[key], data1[key])) {
      return {
        type: 'changed', name: key, value1: data1[key], value2: data2[key] 
      };
    }
    return { type: 'unchanged', name: key, value: data1[key] };
  });
  return result;
};

const treeBuilder = (data1, data2) => ({ type: 'root', children: compareData(data1, data2) });

export default treeBuilder;
