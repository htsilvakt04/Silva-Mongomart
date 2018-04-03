export const GET_INIT_CATEGORY = 'GET_INIT_CATEGORY';

export const CATEGORY = {
    getInit: function (data) {
        return {
            type: GET_INIT_CATEGORY,
            data
        }
    }
}
