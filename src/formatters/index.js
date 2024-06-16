import stylish from '../formatters/stylish.js';
import plain from '../formatters/plain.js';

const chooseFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return stylish(data);
    case 'plain':
      return plain(data);
    default:
      throw new Error(`Unknown format: '${format}'!`);
  }
};

export default chooseFormat;
