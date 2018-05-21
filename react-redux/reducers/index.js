import byIds, * as fromByIds from './byIDs';
import byCat, * as fromByCat from './byCat';
import currentPage from './currentPage';

import {combineReducers} from 'redux';

export default combineReducers({byIds, byCat, currentPage});

export const getItemsByCatAndFilter = (state, cat) => {
    if (cat === 'All') {
        return fromByIds.getAll(state.byIds, state.filterText)
    } else {
        return fromByIds.getItemsByFilter(state.byIds, state.filterText, fromByCat.getItemsIds(state.byCat, cat));
    }
}

export const getCatNameAndTotal = (state) =>
    fromByCat.getCatNameAndTotal(state.byCat)

export const getItemsById = (state, id) =>
    fromByIds.getItemById(state.byIds, id)

export const handleChangeBySearch = (state, val) =>
    fromByIds.changeItemBySearch(state.byIds, val)



