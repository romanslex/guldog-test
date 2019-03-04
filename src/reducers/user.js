const user = (state, action) => {
    if (typeof state === 'undefined')
        return initialState;
    switch (action.type) {
        case 'LOGOUT':
            return Object({isLoggedIn: false}, state);
        case 'LOGIN':
            let newState = Object.assign({}, state);
            newState.name = action.name;
            newState.isLoggedIn = true;
            return newState;
        default:
            return state;
    }
};

const initialState = {
    name: '',
    isLoggedIn: false
};

export default user;