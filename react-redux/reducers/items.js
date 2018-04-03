import {GET_INIT_ITEM, CHANGE_ITEM_BY_CAT} from '../actions/items';
let origin = [];
export default function items (state = [], action) {
    let {type} = action;

    switch (type) {
        case GET_INIT_ITEM:
            origin = origin.concat(action.data);
            return action.data;

        case CHANGE_ITEM_BY_CAT:
            let catName = action.id;
            if (catName === 'All') {
                return origin;
            }
            return origin.filter(item => item.category === catName);
        default:
            return state
    }
}