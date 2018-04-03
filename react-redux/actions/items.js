export const GET_INIT_ITEM = 'GET_INIT_ITEM';
export const CHANGE_ITEM_BY_CAT = 'CHANGE_ITEM_BY_CAT';

export const ITEM = {
    getInit: function (data) {
        return {
            type: GET_INIT_ITEM,
            data
        }
    },
    change: function (id) {
        return {
            type: CHANGE_ITEM_BY_CAT,
            id
        }
    }
}