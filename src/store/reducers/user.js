const INITIAL_STATE = {
    counter: 0
}

const userReducer = (state = INITIAL_STATE, action) => {
    if (action.type === "inc") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
}

export default userReducer;