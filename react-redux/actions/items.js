import {PAGE} from './page';
export const GET_INIT_ITEM = 'GET_INIT_ITEM';
export const CHANGE_ITEM_BY_SEARCH = 'CHANGE_ITEM_BY_SEARCH';
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
    },
    changeBySearch: function (search) {
        return {
            type: CHANGE_ITEM_BY_SEARCH,
            search
        }
    }
}

export function handlechangeBySearch(search) {
    return (dispatch) => {
        dispatch(
            ITEM.changeBySearch(search)
        )
        dispatch(
            PAGE.change(1)
        )
    }
}