import {ITEM} from './items';
import {PAGE} from './page';

export function handleChangeItemAndPage(itemId) {
    return (dispatch) => {
        dispatch(
            ITEM.change(itemId)
        )
        dispatch(
            PAGE.change(1)
        )
    }
}