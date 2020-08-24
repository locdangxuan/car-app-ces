import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    LOGIN,
} from 'config/constants/Action.Types';

const initState = {
    username: '',
    password: '',
    displayname: '',
    phonenumber: '',
    email: '',
    verification: '',
    pending: false,
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_FIELD_AUTH:
            return { ...state, [action.key]: action.value };
        case LOGIN.SUCCESS: {
            return { ...state, ...initState, isModalOn: false };
        }
        case LOGIN.ERROR: {
            const { message } = action;
            return { ...state, message };
        }
        case REGISTER.REQUEST: {
            return { ...state, pending: true };
        }
        case REGISTER.SUCCESS: {
            const { username, password } = state;
            return {
                ...state,
                ...initState,
                username,
                password,
                registerDone: true,
                message: REGISTER.SUCCESS,
            };
        }
        case REGISTER.ERROR:
            return {
                ...state,
                pending: false,
                message: action.message,
            };
        default:
            return state;
    }
};

export default authReducer;
