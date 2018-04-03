export function isObject (item) {
    return Object.prototype.toString.call(item) === '[object Object]'
}

export function formatCategories(categories) {
    return categories.reduce((category, key) => {
        category[key._id] = key;
        return category;
    }, {});
}