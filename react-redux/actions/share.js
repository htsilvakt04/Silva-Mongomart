import {CATEGORY} from './category';
import {PAGE} from './page';

export function handleChangeCat(itemId) {
    return (dispatch) => {
        dispatch(
            CATEGORY.change(itemId)
        )
        dispatch(
            PAGE.change(1)
        )
    }
}