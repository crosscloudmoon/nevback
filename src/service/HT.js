import service from './index.js';

//  登录
export const toLogin = param => service('post', 'loginController/login', param);

//  注册
export const toSign = param => service('post', 'loginController/register', param);

//  查看用户
export const getAllUser = param => service('post', 'admin/queryUser', param);

//  角色升级
export const getRoleUp = id => service('get', 'admin/upgrade?id=' + id);

//  得到Echarts数据
export const getEchartsData = (type, year) =>
    service('get', `table/queryByType?type=${type}&year=` + year);

//  角色升级
export const getEchartsYear = type => service('get', `table/queryYearByType?type=` + type);

//  新增
export const postEchartsAdd = params => service('post', `table/insertByType`, params);

//  删除
export const getEchartsDel = (type, id) =>
    service('get', `table/deleteByType?type=${type}&id=` + id);

//  查看用户
export const postEchartsAlter = param => service('post', 'table/updateByType', param);
