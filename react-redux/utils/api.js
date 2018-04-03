import {getCategories} from './_DATA.js'
import {formatCategories} from './helpers';


export function getInitialData () {
    return Promise.all([
        getCategories('All')
    ]).then(([categories]) => ({
        categories: formatCategories(categories)
    }))
}

