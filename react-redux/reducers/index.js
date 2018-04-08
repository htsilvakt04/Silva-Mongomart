import categories from './caregories';
import items from './items';
import page from './page';
import currentCat from './currentCat';

import {combineReducers} from 'redux';

export default combineReducers({categories, items, page, currentCat});