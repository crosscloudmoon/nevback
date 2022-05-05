import service from './index.js';

//  登录
export const toLogin = param => service('post', 'loginController/login', param);

//  查表
export const getEchartsData = (type, year) =>
    service('get', `table/queryByType?type=${type}&year=${year}`);

//  查年份
export const getEchartsYear = param => service('get', 'table/queryYearByType?type=' + param);

//  查用户
export const getUser = param => service('post', 'admin/queryUser', param);
