import _ from 'lodash';

const indent = (depth, spacesCount = 4) => ' '.repeat(depth * spacesCount - 2);
const currentIndent = (depth, spacesCount = 4) => ' '.repeat(spacesCount * depth);

const stringify = (value, depth = 1) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const valueData = Object.entries(value);
  const resultOfValue = valueData.map(([key, val]) => {return `${currentIndent(depth)}${key}: ${stringify(val, depth + 1)}`});
  return `{\n${resultOfValue.join('\n')}\n${currentIndent(depth - 1)}}`;
};

const stylish = (node, depth = 0) => {
  const { 
    type, 
    name, 
    value, 
    value1, 
    value2, 
    children
  } = node;

  switch (type) {
    case 'root': {
      const result = children.flatMap((child) => stylish(child, depth + 1));
      return `{\n${result.join('\n')}\n}`;
    }
    case 'nested': {
      const result = children.flatMap((child) => stylish(child, depth + 1));
      return `${indent(depth)}  ${name}: {\n${result.join('\n')}\n${indent(depth)}  }`;
    }
    case 'added': {
      return `${indent(depth)}+ ${name}: ${stringify(value, depth + 1)}`;
    }
    case 'deleted':
      return `${indent(depth)}- ${name}: ${stringify(value, depth + 1)}`;
    case 'changed': {
      const val1 = `${indent(depth)}- ${name}: ${stringify(value1, depth + 1)}`;
      const val2 = `${indent(depth)}+ ${name}: ${stringify(value2, depth + 1)}`;
      return `${val1}\n${val2}`;
    }
    case 'unchanged':
      return `${indent(depth)}  ${name}: ${stringify(value, depth + 1)}`;
    default:
      throw new Error(`Unknown type of node: ${type}`);
  }
};

export default stylish;
