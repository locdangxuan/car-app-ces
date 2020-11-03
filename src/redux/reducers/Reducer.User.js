import { USER } from 'config/constants/Action.Types';

const initState = {
    data: undefined,
    fieldsValidity: {
        username: true,
        displayName: true,
        email: true,
        phoneNumber: true,
        newPassword: true,
        password: true,
        verification: true,
    },
    fieldsErrorMessage: {
        username: '',
        displayName: '',
        email: '',
        phoneNumber: '',
        newPassword: '',
        password: '',
        verification: '',
    },
};

const userReducer = (state = initState, action) => {
    switch (action.type) {
        case USER.REQUEST:
            return {
                ...state,
                pending: true,
                isSuccess: false,
                message: '',
                fieldsValidity: {
                    name: true,
                    displayName: true,
                    phone: true,
                    email: true,
                    newPassword: true,
                    password: true,
                    verification: true,
                },
                fieldsErrorMessage: {
                    name: '',
                    displayName: '',
                    phone: '',
                    email: '',
                    newPassword: '',
                    password: '',
                    verification: '',
                },
            };
        case USER.FETCH_DATA_FAILED:
            return {
                ...state,
                pending: false,
                isSuccess: false,
                data: undefined,
            };
        case USER.FETCH_DATA_SUCCEED:
            return {
                ...state,
                pending: false,
                isSuccess: true,
                data: action.data,
            };
        case USER.UPDATE_PROFILE_FAILED:
            return {
                ...state,
                pending: false,
                isSuccess: false,
                message: action.message,
                fieldsValidity: action.invalidFields.fieldsValidity,
                fieldsErrorMessage: action.invalidFields.fieldsErrorMessage,
            };
        case USER.UPDATE_PROFILE_SUCCEED:
            return {
                ...state,
                pending: false,
                isSuccess: true,
                message: action.message,
                data: action.profile,
            };
        default:
            return state;
    }
};

export default userReducer;
