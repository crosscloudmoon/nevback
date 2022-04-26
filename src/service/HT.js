import service from './index.js';

// test axios
export const test = param => service('get', 'homeManagerController/queryAboutUsList', param);
