import {getInitialData} from '../utils/api';
import {CATEGORY} from './category';
const AUTHED_ID = 'tylermcginnis'; // we can get it from cookies (session ID)

export function handleInitialData () {
    return (dispatch) => {
        getInitialData()
            .then(({categories}) => {
                dispatch(CATEGORY.getInit(categories))
            })
            .catch((err) => {
            console.log(err);
                alert('Opps, database connection had had some issues')
            })
    }
}