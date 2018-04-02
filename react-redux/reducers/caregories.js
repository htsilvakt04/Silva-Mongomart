import {GET_CATEGORY} from '../actions/category';

export default function categories (state = null, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return state;
        default:
            return state
    }
}