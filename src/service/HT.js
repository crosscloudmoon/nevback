import service from './index.js';

//  登录
export const toLogin = param => service('post', 'loginController/login', param);

//  注册
export const toSign = param => service('post', 'loginController/register', param);

//  查看用户
export const getAllUser = param => service('post', 'admin/queryUser', param);
