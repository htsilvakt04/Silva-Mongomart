import {CHANGE_CAT} from '../actions/category';

export default function currentCat (state = 'All', action) {
    let {type} = action;

    switch (type) {
        case CHANGE_CAT:
            return action.name;
        default:
            return state
    }
}