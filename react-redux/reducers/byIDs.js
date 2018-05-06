
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