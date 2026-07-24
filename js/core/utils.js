export const utils = {
  // Delay async
  delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  },

  // Deep clone
  deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  // Merge objects
  merge(target, source) {
    return { ...target, ...source };
  },

  // Filter object keys
  pick(obj, keys) {
    return keys.reduce((result, key) => {
      if (key in obj) result[key] = obj[key];
      return result;
    }, {});
  },

  // Omit object keys
  omit(obj, keys) {
    return Object.keys(obj).reduce((result, key) => {
      if (!keys.includes(key)) result[key] = obj[key];
      return result;
    }, {});
  },

  // Group array by key
  groupBy(array, key) {
    return array.reduce((result, item) => {
      const group = item[key];
      if (!result[group]) result[group] = [];
      result[group].push(item);
      return result;
    }, {});
  },

  // Sort array
  sortBy(array, key, order = 'asc') {
    return [...array].sort((a, b) => {
      if (order === 'asc') return a[key] > b[key] ? 1 : -1;
      return a[key] < b[key] ? 1 : -1;
    });
  }
};
