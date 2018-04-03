import {GET_INIT_CATEGORY} from '../actions/category';

export default function categories (state = {}, action) {
    let {type} = action;
    switch (type) {
        case GET_INIT_CATEGORY:
            return action.data;
        default:
            return state
    }
}