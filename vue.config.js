const path = require('path');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('C', resolve('src/components'))
            .set('U', resolve('src/utils'))
            .set('S', resolve('src/service'))
            .set('V', resolve('src/views'));
    },
};
