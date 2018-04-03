import {GET_INIT_CATEGORY} from '../actions/category';

export default function categories (state = {}, action) {
    let {type} = action;
    switch (type) {
        case GET_INIT_CATEGORY:
           console.log('look here',action);
            return action.data;
        default:
            return state
    }
}