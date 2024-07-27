import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const caseAdded = (propertyPath, value) => `Property '${propertyPath}' was added with value: ${stringify(value)}`;
const caseDeleted = (propertyPath) => `Property '${propertyPath}' was removed`;
const caseChanged = (propertyPath, oldValue, newValue) => `Property '${propertyPath}' was updated. From ${stringify(oldValue)} to ${stringify(newValue)}`;

const plain = (node, acc = []) => {
  const {
    type, 
    name, 
    value, 
    value1, 
    value2, 
    children 
  } = node;
  const makeKeysPath = [...acc, name];
  const propertyPath = makeKeysPath.join('.');

  switch (type) {
    case 'root': {
      const result = children.filter((child) => child.type !== 'unchanged').flatMap((child) => plain(child, []));
      return result.join('\n');
    }
    case 'nested': {
      const result = children.filter((child) => child.type !== 'unchanged').flatMap((child) => plain(child, makeKeysPath));
      return result.join('\n');
    }
    case 'added': {
      return caseAdded(propertyPath, value);
    }
    case 'deleted': {
      return caseDeleted(propertyPath);
    }
    case 'changed': {
      return caseChanged(propertyPath, value1, value2);
    }
    default:
      throw new Error(`Type: ${type} is undefined`);
  }
};

export default plain;
