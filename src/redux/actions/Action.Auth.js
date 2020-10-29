import authService from 'services/api/Api.Authentication';
import { REGISTER, LOGIN, AUTH, LOGOUT } from 'config/constants/Action.Types';
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
    let { invalidFields } = errorRes;
    if (!invalidFields) {
        invalidFields = [];
        invalidFields.push({
            name: 'username',
            message,
        });
    }
    switch (status) {
        case statusCode.UNAUTHORIZED:
            return { message };
        case statusCode.BAD_REQUEST:
            return { message: MESSAGE_ERROR.INVALID_FIELD, invalidFields };
        case statusCode.NOT_FOUND:
            return { message: MESSAGE_ERROR.SERVER_DOWN };
        default:
            return { message };
    }
};
const loginFailure = (errorRes) => {
    const { message, invalidFields } = handleError(errorRes);
    return {
        type: LOGIN.ERROR,
        message,
        invalidFields,
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
    const { message, invalidFields } = handleError(errorRes);
    return {
        type: REGISTER.ERROR,
        message,
        invalidFields,
    };
};

const onRegisterRequest = () => ({ type: REGISTER.REQUEST });

const onLoginRequest = () => ({ type: LOGIN.REQUEST });

const register = (fields) => {
    return async (dispatch) => {
        dispatch(onRegisterRequest());
        setTimeout(async () => {
            try {
                validator.registerValidator(fields);
                const payload = await authService.register(fields);
                dispatch(registerSuccess(payload));
            } catch (errorRes) {
                dispatch(registerFailure(JSON.parse(errorRes.message)));
            }
        }, 1000);
    };
};

const login = (fields) => {
    return async (dispatch) => {
        dispatch(onLoginRequest());
        setTimeout(async () => {
            try {
                validator.loginValidator(fields);
                const payload = await authService.login(fields);
                dispatch(loginSuccess(payload));
                utils.reloadComponents(dispatch);
            } catch (errorRes) {
                dispatch(loginFailure(JSON.parse(errorRes.message)));
            }
        }, 1000);
    };
};

const logout = () => {
    return (dispatch) => {
        authService.logout();
        dispatch(logoutSuccess());
        utils.reloadComponents(dispatch);
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
            type: AUTH.UPDATE_FIELD,
            key: fields.id,
            value: fields.value,
        });
    };
};

const onCancel = () => {
    return (dispatch) => {
        dispatch({
            type: AUTH.CANCEL,
        });
    };
};
export default {
    register,
    login,
    updateFieldAuth,
    verifyAuthenticationStatus,
    logout,
    onCancel,
};
