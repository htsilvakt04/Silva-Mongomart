export function searchItemInState(state, searchText) { // just local function
    let result = [];
    console.log('&&&&&&&&&&&&&&&&&&&&&', state);
    console.log('&&&&&&&&&&&&&&&&&&&&&', searchText);
    Object.keys(state).forEach(id => {
        const regex = new RegExp(searchText, 'i');
        const item = state[id];
        if (item.title.search(regex) > -1 || item.description.search(regex) > -1) {
            result.push(item)
        }
    });
    return result;
}