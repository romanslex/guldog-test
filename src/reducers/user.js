const user = (state, action) => {
    if (typeof state === 'undefined')
        return initialState;
    switch (action.type) {
        case 'LOGOUT':
            return Object.assign({}, state, {isLoggedIn: false});
        case 'LOGIN':
            return Object.assign({}, state, {
                name: action.name,
                isLoggedIn: true
            });
        default:
            return state;
    }
};

const initialState = {
    name: '',
    isLoggedIn: false
};

export default user;