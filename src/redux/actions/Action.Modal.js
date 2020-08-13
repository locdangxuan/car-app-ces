import { REGISTER } from 'config/constants/Action.Types';

const register = (user) => {
    // eslint-disable-next-line no-unused-vars
    return (dispatch, getState) => {
        dispatch({ type: REGISTER, user });
    };
};

export default register;
