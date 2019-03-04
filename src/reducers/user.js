const user = (state, action) => {
    if (typeof state === 'undefined')
        return initialState;
    return state;
};

const initialState = {
    name: '',
    isLoggedIn: false
};

export default user;