import Axios from 'axios';
import serveObgFun from '../utils/serveUtil';
let service = Axios.create({
    // 设置超时时间
    timeout: 60000,
    // baseURL: 'http://localhost:8089/',
    baseURL: 'http://36.112.11.166:8077/insert/',
});
let qs = require('qs');
serveObgFun(service);

/**
 * 项目的service 的封装
 * @param {*} method 请求方式：post,get,delete,put
 * @param {*} url :请求路径
 * @param {*} data ：请求参数
 * @param {*} cancelToken ：取消请求的回调
 * @param {*} isFile ：文件请求情况的code
 * @param {*} onUploadProgressFun :上传文件时的进度条
 * @param {*} isDeleteByParam :delete删除时是否将参数放到body中
 */
let serviceFun = function (
    method,
    url,
    data = null,
    cancelToken = null,
    isFile = 0,
    onUploadProgressFun,
    isDeleteByParam = false
) {
    function serveAddPackag(servicePo, config) {
        if (method === 'post') {
            return servicePo.post(url, data, config);
        } else if (method === 'get') {
            let paramN = data;
            paramN = qs.stringify(data, { arrayFormat: 'repeat' });
            paramN = paramN ? '?' + paramN : '';
            return servicePo.get(url + paramN, config);
        } else if (method === 'delete') {
            console.log(isDeleteByParam);
            if (isDeleteByParam) {
                return servicePo.delete(url, { data: data });
            } else {
                return servicePo.delete(url, { params: data });
            }
        } else if (method === 'put') {
            return servicePo.put(url, data);
        } else {
            console.error('未知的method' + method);
            return false;
        }
    }
    method = method.toLowerCase();
    // axios配置文件
    let config = {};
    if (cancelToken && cancelToken.cancelToken) {
        config.cancelToken = cancelToken.cancelToken;
    }
    // post导出文件
    if (isFile === 1) {
        config.responseType = 'blob';
    }
    // 上传文件
    else if (isFile === 2) {
        config.headers = { 'Content-Type': 'multipart/form-data' };
        config.onUploadProgress = onUploadProgressFun;
    }
    return serveAddPackag(service, config);
};

export default serviceFun;
