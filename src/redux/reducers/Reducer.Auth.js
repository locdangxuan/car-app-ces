import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    LOGIN,
    LOGOUT,
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
            return {
                ...state,
                ...initState,
                isLogginSucceed: true,
            };
        }
        case LOGIN.ERROR: {
            const { message } = action;
            return { ...state, message, isValid: false, pending: false };
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
                isValid: true,
                message: REGISTER.SUCCESS,
            };
        }
        case REGISTER.ERROR:
            return {
                ...state,
                isValid: false,
                pending: false,
                message: action.message,
            };
        case LOGOUT.SUCCESS:
            return {
                ...initState,
                isLogginSucceed: false,
            };
        default:
            return state;
    }
};

export default authReducer;
