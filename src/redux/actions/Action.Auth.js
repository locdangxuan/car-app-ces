import authService from 'services/api/Api.Authentication';
import {
    REGISTER,
    LOGIN,
    UPDATE_FIELD_AUTH,
    LOGOUT,
} from 'config/constants/Action.Types';
import * as statusCode from 'config/constants/StatusCode';
import { MESSAGE_ERROR } from 'config/messages/Messages.Auth';
import validator from 'services/validator/FieldsValidator';
import utils from 'utils/utils';

const loginSuccess = () => {
    return {
        type: LOGIN.SUCCESS,
    };
};

const logoutSuccess = () => {
    return {
        type: LOGOUT.SUCCESS,
    };
};

const handleError = (errorRes) => {
    const { status, message } = errorRes;
    switch (status) {
        case statusCode.UNAUTHORIZED:
            return message;
        case statusCode.BAD_REQUEST:
            return message;
        default:
            return MESSAGE_ERROR.SERVER_DOWN;
    }
};
const loginFailure = (errorRes) => {
    const message = handleError(errorRes);
    return {
        type: LOGIN.ERROR,
        message,
    };
};

const registerSuccess = (payload) => {
    const { message } = payload;
    return {
        type: REGISTER.SUCCESS,
        message,
    };
};

const registerFailure = (errorRes) => {
    const message = handleError(errorRes);
    return {
        type: REGISTER.ERROR,
        message,
    };
};

const authPending = () => {
    return {
        type: REGISTER.REQUEST,
    };
};

const register = (fields) => {
    return async (dispatch) => {
        dispatch(authPending);
        try {
            validator.registerValidator(fields);
            const payload = await authService.register(fields);
            dispatch(registerSuccess(payload));
        } catch (errorRes) {
            dispatch(registerFailure(JSON.parse(errorRes.message)));
        }
    };
};

const login = (fields) => {
    return async (dispatch) => {
        dispatch(authPending);
        try {
            validator.loginValidator(fields);
            const payload = await authService.login(fields);
            dispatch(loginSuccess(payload));
        } catch (errorRes) {
            dispatch(loginFailure(JSON.parse(errorRes.message)));
        }
    };
};

const logout = () => {
    return (dispatch) => {
        authService.logout();
        dispatch(logoutSuccess());
    };
};

const verifyAuthenticationStatus = () => {
    return (dispatch) => {
        try {
            const token = utils.getToken();
            if (token) {
                dispatch(loginSuccess());
            }
        } catch (error) {
            dispatch(loginFailure);
        }
    };
};

const updateFieldAuth = (fields) => {
    return (dispatch) => {
        dispatch({
            type: UPDATE_FIELD_AUTH,
            key: fields.id,
            value: fields.value,
        });
    };
};
export default {
    register,
    login,
    updateFieldAuth,
    verifyAuthenticationStatus,
    logout,
};
