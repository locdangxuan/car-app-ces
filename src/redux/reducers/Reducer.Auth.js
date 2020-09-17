import { AUTH, REGISTER, LOGIN, LOGOUT } from 'config/constants/Action.Types';

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
        case AUTH.UPDATE_FIELD:
            return { ...state, [action.key]: action.value };
        case AUTH.CANCEL:
            return {
                ...initState,
                isValid: true,
                message: '',
                invalidFields: [],
                isLogginSucceed: state.isLogginSucceed,
            };
        case LOGIN.SUCCESS: {
            return {
                ...state,
                ...initState,
                isLogginSucceed: true,
            };
        }
        case LOGIN.ERROR: {
            return {
                ...state,
                message: action.message,
                isValid: false,
                pending: false,
                invalidFields: action.invalidFields,
            };
        }
        case LOGIN.REQUEST:
        case REGISTER.REQUEST: {
            return {
                ...state,
                message: '',
                pending: true,
                isValid: true,
                invalidFields: [],
            };
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
                invalidFields: action.invalidFields,
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
