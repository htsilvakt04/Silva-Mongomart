const byCat = (state = {}, action) => {
    switch (action.type) {
        case 'GET_INIT_ITEM':
            const { data } = action;

            return Object.keys(data).reduce((init, key) => {
                let obj = data[key];
                let isExists = init[obj.category];
                if (!isExists) init[obj.category] = [];

                init[obj.category].push(obj._id);
                return init;
            }, {});
        default:
            return state;
    }
}

export default byCat;