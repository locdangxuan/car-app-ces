import authService from 'services/api/Api.Authentication';
import {
    REGISTER,
    LOGIN,
    UPDATE_FIELD_AUTH,
} from 'config/constants/Action.Types';
import * as statusCode from 'config/constants/StatusCode';
import { MESSAGE_ERROR } from 'config/messages/Auth.Messages';
import validator from 'services/validator/FieldsValidator';

const loginSuccess = (payload) => {
    const { profile, token } = payload;
    return {
        type: LOGIN.SUCCESS,
        profile: JSON.stringify(profile),
        token,
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
        try {
            dispatch(authPending);
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
        try {
            dispatch(authPending);
            validator.loginValidator(fields);
            const payload = await authService.login(fields);
            dispatch(loginSuccess(payload));
        } catch (errorRes) {
            dispatch(loginFailure(JSON.parse(errorRes.message)));
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
export default { register, login, updateFieldAuth };
