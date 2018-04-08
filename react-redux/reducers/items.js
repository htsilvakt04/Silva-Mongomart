import {GET_INIT_ITEM, CHANGE_ITEM_BY_SEARCH, ADD_REVIEW} from '../actions/items';
import {CHANGE_CAT} from '../actions/category';
import {calculateItemByCat, calculateItemBySearch} from '../utils/helpers';
import moment from 'moment';
let origin;
export default function items (state = {}, action) {
    let {type} = action;

    switch (type) {
        case GET_INIT_ITEM:
            origin = action.data;
            return action.data;
        case CHANGE_CAT:
            let catName = action.name;

            if (catName === 'All') {
                return origin;
            }

            let result = calculateItemByCat(origin, catName);

            return result.reduce((item, key) => {
                item[key._id] = key;
                return item;
            }, {});

        case CHANGE_ITEM_BY_SEARCH:
            let {search} = action;
            return search === '' ? origin : calculateItemBySearch(origin, search);
        case ADD_REVIEW:
            let {id, ...data} = action.data;
            let item = state[id];
            let formatedData = {
                name: data.name,
                comment: data.review,
                stars: data.stars,
                data: moment().valueOf()
            }
            if (item.reviews) {
                return {
                    ...state,
                    [id]: {
                        ...item,
                        reviews: item.reviews.concat(formatedData)
                    }
                }
            }

            return {
                ...state,
                [id]: {
                    ...item,
                    reviews: [formatedData]
                }
            }

        default:
            return state
    }
}

