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
            const fieldsValidity = {
                username: true,
                password: true,
            };
            const fieldsErrorMessage = {
                username: '',
                password: '',
            };
            Object.values(action.invalidFields).forEach((value) => {
                const { name, message } = value;
                fieldsValidity[name] = false;
                fieldsErrorMessage[name] = message;
            });
            return {
                ...state,
                isValid: false,
                pending: false,
                message: action.message,
                fieldsValidity,
                fieldsErrorMessage,
            };
        }
        case LOGIN.REQUEST: {
            return {
                ...state,
                message: '',
                pending: true,
                isValid: true,
                fieldsValidity: {
                    username: true,
                    password: true,
                },
                fieldsErrorMessage: {
                    username: '',
                    password: '',
                },
            };
        }
        case REGISTER.REQUEST: {
            return {
                ...state,
                message: '',
                pending: true,
                isValid: true,
                fieldsValidity: {
                    username: true,
                    displayName: true,
                    email: true,
                    phone: true,
                    password: true,
                    verification: true,
                },
                fieldsErrorMessage: {
                    username: '',
                    displayName: '',
                    email: '',
                    phone: '',
                    password: '',
                    verification: '',
                },
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
        case REGISTER.ERROR: {
            const fieldsValidity = {
                username: true,
                displayName: true,
                email: true,
                phone: true,
                password: true,
                verification: true,
            };
            const fieldsErrorMessage = {
                username: '',
                displayName: '',
                email: '',
                phone: '',
                password: '',
                verification: '',
            };
            Object.values(action.invalidFields).forEach((value) => {
                const { name, message } = value;
                fieldsValidity[name] = false;
                fieldsErrorMessage[name] = message;
            });
            return {
                ...state,
                isValid: false,
                pending: false,
                message: action.message,
                fieldsValidity,
                fieldsErrorMessage,
            };
        }
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
