
const byIDs = (state = {}, action) => {
    switch (action.type) {
        case 'GET_INIT_ITEM':
            const { data } = action;

            return Object.keys(data).reduce((init, key) => {
                init[data[key]._id] = data[key];

                return init;
            }, {});

        default:
            return state;
    }
}

export default byIDs;

export const getItems = (state, arrayIds) => arrayIds.map(id => state[id])
export const getAll = (state) => Object.keys(state).map( id => state[id])
export const getItemById = (state, id) => state[id]