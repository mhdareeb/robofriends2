const initialState = {searchField:''}

const changeSearchField = (state=initialState, action) => {
    switch(action.type)
    {
        case 'CHANGE_SEARCH_FIELD':
            console.log(action.payload);
            return Object.assign({},state,{searchField:action.payload}) ;
        default:
            return state;
    }
}

export default changeSearchField;