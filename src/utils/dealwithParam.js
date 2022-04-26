export function delEmpty(param) {
    Object.keys(param).forEach(key => {
        if (
            param[key] === null ||
            param[key] === undefined ||
            param[key] === '' ||
            (Array.isArray(param[key]) && param[key].length === 0)
        ) {
            delete param[key];
        }
    });
    return param;
}
