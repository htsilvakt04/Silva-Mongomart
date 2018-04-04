import {GET_INIT_ITEM, CHANGE_ITEM_BY_CAT, CHANGE_ITEM_BY_SEARCH} from '../actions/items';
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
        case CHANGE_ITEM_BY_SEARCH:
            let {search} = action;
            let searchReg = new RegExp(search, 'i');

            return search === '' ? origin :origin.filter( item => {
                let {title, slogan, description, category} = item;
                return title.search(searchReg) >= 0 || slogan.search(searchReg) >= 0 || description.search(searchReg) >= 0 || category.search(searchReg) >= 0;
            });
        default:
            return state
    }
}