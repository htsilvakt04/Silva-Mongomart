import {CHANGE_PAGE} from '../actions/page';
export default function page (state = 1, action) {
    let {type} = action;

    switch (type) {
        case CHANGE_PAGE:
            return action.id;
        default:
            return state
    }
}