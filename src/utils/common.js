class CommonJs {
    /**
     * 时间转换成yyyy-MM-dd hh:mm:ss
     */
    timeChange(date) {
        if (date) {
            let year = date.getFullYear();
            let month = Number(date.getMonth()) + 1;
            let day = date.getDate();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            return (
                year +
                '-' +
                this.oneToTwo(month) +
                '-' +
                this.oneToTwo(day) +
                ' ' +
                this.oneToTwo(hours) +
                ':' +
                this.oneToTwo(minutes) +
                ':' +
                this.oneToTwo(seconds)
            );
        } else {
            return '';
        }
    }
    /**
     * 时间格式一个数字转两个数字
     */
    oneToTwo(str) {
        let resStr = str;
        if (String(str).length < 2) {
            resStr = '0' + String(str);
        }
        return resStr;
    }
    /**
     * 经纬度改变，如果最大，最小经纬度相同，改成一个点
     */
    changeLngLat(item) {
        if (item.maxlatitude === item.minlatitude && item.minlongitude === item.maxlongitude) {
            item.lon = item.minlongitude;
            item.lat = item.maxlatitude;
            item.sitGeoIsPoint = true;
        } else {
            item.latLngArr = [
                item.minlongitude,
                item.minlatitude,
                item.maxlongitude,
                item.minlatitude,
                item.maxlongitude,
                item.maxlatitude,
                item.minlongitude,
                item.maxlatitude,
                item.minlongitude,
                item.minlatitude,
            ];
            item.sitGeoIsPoint = false;
        }
    }
    // 去除数组重复数据
    arrDuplicate(arr, isNum) {
        let obg = {};
        arr.forEach(item => {
            obg[item] = null;
        });
        let resData = [];
        Object.keys(obg).forEach(item => {
            resData.push(Number(item));
        });
        return resData;
    }
    /**
     * 经纬度范围转wkt
     */
    lngLatToWtk(latLngArr) {
        let WKTStr =
            'POLYGON((' +
            latLngArr[3] +
            ' ' +
            latLngArr[0] +
            ',' +
            latLngArr[1] +
            ' ' +
            latLngArr[0] +
            ',' +
            latLngArr[1] +
            ' ' +
            latLngArr[2] +
            ',' +
            latLngArr[3] +
            ' ' +
            latLngArr[2] +
            ',' +
            latLngArr[3] +
            ' ' +
            latLngArr[0] +
            '))';
        return WKTStr;
    }
    /**
     * 导出文件
     */
    downLoadXls(data, filename) {
        let blob = new Blob([data], { type: 'application/zip' });
        let url = window.URL.createObjectURL(blob);
        const link = document.createElement('a'); // 创建a标签
        link.href = url;
        link.download = filename; // 重命名文件
        link.click();
        URL.revokeObjectURL(url); // 释放内存
    }
    // 大小单位转化
    conver(limit) {
        let size = '';
        if (limit < 0.1 * 1024) {
            // 如果小于0.1KB转化成B
            size = limit.toFixed(2) + 'B';
        } else if (limit < 0.1 * 1024 * 1024) {
            // 如果小于0.1MB转化成KB
            size = (limit / 1024).toFixed(2) + 'KB';
        } else if (limit < 0.1 * 1024 * 1024 * 1024) {
            // 如果小于0.1GB转化成MB
            size = (limit / (1024 * 1024)).toFixed(2) + 'MB';
        } else {
            // 其他转化成GB
            size = (limit / (1024 * 1024 * 1024)).toFixed(2) + 'GB';
        }

        let sizestr = size;
        let len = sizestr.indexOf('.');
        let dec = sizestr.substr(len + 1, 2);
        if (dec === '00') {
            // 当小数点后为00时 去掉小数部分
            return sizestr.substring(0, len) + sizestr.substr(len + 3, 2);
        }
        return sizestr;
    }
    // eslint-disable-next-line complexity
    changeStatusColor(statusCN) {
        let _color = {};
        switch (statusCN) {
            case '已发布':
                _color.c = '#52D087';
                _color.b = '#E7FFE9';
                break;
            case '已通过':
                _color.c = '#52D087';
                _color.b = '#E7FFE9';
                break;
            case '已完成':
                _color.c = '#52D087';
                _color.b = '#E7FFE9';
                break;
            case '已启用':
                _color.c = '#52D087';
                _color.b = '#E7FFE9';
                break;
            case '启用':
                _color.c = '#52D087';
                _color.b = '#E7FFE9';
                break;
            case '审核通过':
                _color.c = '#52D087';
                _color.b = '#E7FFE9';
                break;
            case '评审通过':
                _color.c = '#52D087';
                _color.b = '#E7FFE9';
                break;
            case '已拒绝':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
                break;
            case '未启用':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
                break;
            case '未开始':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
                break;
            case '停用':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
                break;
            case '暂停':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
                break;
            case '取消':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
            // eslint-disable-next-line no-fallthrough
            case '失败':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
                break;
            case '拒绝':
                _color.c = '#F87979';
                _color.b = '#FFF2EF';
                break;
            case '待审核':
                _color.c = '#FFCA59';
                _color.b = '#FFF6E2';
                break;
            case '评审中':
                _color.c = '#53a3f5';
                _color.b = '#e3f3ff';
                break;
            case '处理中':
                _color.c = '#53a3f5';
                _color.b = '#e3f3ff';
                break;
            case '执行中':
                _color.c = '#53a3f5';
                _color.b = '#e3f3ff';
                break;
            case '审核中':
                _color.c = '#53a3f5';
                _color.b = '#e3f3ff';
                break;
            default:
                break;
        }
        return _color;
    }
    // 手机号验证
    validateMobilePhone(rule, value, callback) {
        if (value === '') {
            callback(new Error('负责人手机号不可为空'));
        } else {
            if (value !== '') {
                let reg = /^1[3456789]\d{9}$/;
                if (!reg.test(value)) {
                    callback(new Error('请输入正确的手机号码'));
                }
            }
            callback();
        }
    }
    // 邮箱验证
    validateEmail(rule, value, callback) {
        if (value === '') {
            callback(new Error('请正确填写邮箱'));
        } else {
            if (value !== '') {
                let reg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if (!reg.test(value)) {
                    callback(new Error('请输入正确的邮箱'));
                }
            }
            callback();
        }
    }
}

export default new CommonJs();
