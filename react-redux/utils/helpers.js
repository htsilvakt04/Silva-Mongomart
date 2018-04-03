export function isObject (item) {
    return Object.prototype.toString.call(item) === '[object Object]'
}

export function formatCategories(categories) {
    return categories.reduce((category, key) => {
        category[key._id] = key;
        return category;
    }, {});
}

export function formatItems(items) {
    return items;
}

export function calculateItemsToDisplay(items, perPage, currentPage) {
    let bottom = (currentPage - 1) * perPage;
    let top =  perPage * currentPage;

    return items.filter((item, index) => index >= bottom && index < top);
}