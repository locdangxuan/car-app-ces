const register = (payload) => {
    // eslint-disable-next-line no-unused-vars
    return (dispatch, getState) => {
        // make async call to back-end
        dispatch({ type: 'Register', payload });
    };
};

export default register;
