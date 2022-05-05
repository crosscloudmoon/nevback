import router from '../router';
import Vue from 'vue';

const serveObgFun = function (serveObg) {
    // post请求的时候，我们需要加上一个请求头，所以可以在这里进行一个默认的设置
    // 即设置post的请求头为application/x-www-form-urlencoded;charset=UTF-8
    // service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

    // 请求拦截
    serveObg.interceptors.request.use(
        function (config) {
            if (
                !config.headers.Authorization &&
                localStorage.getItem('Authorization') &&
                localStorage.getItem('Authorization') !== 'undefined'
            ) {
                config.headers.Authorization = localStorage.getItem('Authorization');
            }
            return config;
        },
        error => {
            return Promise.reject(error);
        }
    );

    // http response 拦截器
    serveObg.interceptors.response.use(
        response => {
            return response;
        },
        error => {
            if (error.response) {
                switch (error.response.status) {
                    // case 401:
                    //     // 返回 401 清除token信息并跳转到登录页面
                    //     localStorage.setItem('Authorization', '');
                    //     router.replace({
                    //         path: '/loginHT',
                    //         query: { redirect: router.currentRoute.fullPath },
                    //     });
                    //     return error;
                    case 404:
                        Vue.prototype.$message({
                            message: '服务器连接异常',
                            type: 'error',
                            showClose: true,
                        });
                        return;
                    case 500:
                        Vue.prototype.$message({
                            message: '服务器连接异常',
                            type: 'error',
                            showClose: true,
                        });
                        return;
                }
            }
            if (/Network/g.test(error.message)) {
                Vue.prototype.$message({
                    message: '服务器连接异常',
                    type: 'error',
                    showClose: true,
                });
            } else if (/timeout/g.test(error.message)) {
                Vue.prototype.$message({
                    message: '请求超时，请检查服务器连接是否正常',
                    type: 'error',
                    showClose: true,
                });
            }
        }
    );
};
export default serveObgFun;
