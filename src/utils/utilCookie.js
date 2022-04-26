// 设置cookie
export let setCookie = function(c_name, value, expiremMinutes = 1440 * 3) {
    let exdate = new Date();
    exdate.setTime(exdate.getTime() + expiremMinutes * 60 * 1000);
    console.log('我是记住密码了');
    document.cookie =
        c_name +
        '=' +
        escape(value) +
        (expiremMinutes == null ? '' : ';expires=' + exdate.toGMTString());
};

// 读取cookie
export let getCookie = function(c_name) {
    if (document.cookie.length > 0) {
        let emailAry = document.cookie.split('; ');
        return emailAry;
    }
    return false;
};

// 删除cookie
export let delCookie = function(c_name) {
    let exp = new Date();
    exp.setTime(exp.getTime() - 1);
    let cval = this.getCookie(c_name);
    if (cval != null) {
        document.cookie = c_name + '=' + cval + ';expires=' + exp.toGMTString();
    }
};
