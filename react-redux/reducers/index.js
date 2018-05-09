import byIds, * as fromByIds from './byIDs';
import byCat, * as fromByCat from './byCat';
import currentPage from './currentPage';

import {combineReducers} from 'redux';

export default combineReducers({byIds, byCat, currentPage});

export const getItemsByCat = (state, cat) => {
    return cat === 'All'
            ? fromByIds.getAll(state.byIds)
            : fromByIds.getItems(state.byIds, fromByCat.getItemsIds(state.byCat, cat));
}

export const getCatNameAndTotal = (state) =>
    fromByCat.getCatNameAndTotal(state.byCat)


