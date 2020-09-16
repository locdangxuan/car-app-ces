import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'config/messages/Messages.Auth';
import * as statusCode from 'config/constants/StatusCode';

const passwordVerification = (password, verification) => {
    return password === verification;
};

const charactersValidator = (value) => {
    const expression = new RegExp(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,15}$/
    );
    return expression.test(value);
};

const usernameValidator = (value) => {
    return value.length > 7;
};

const phonenumberValidator = (value) => {
    const expression = new RegExp(/^(?=.*\d)(?=.*[0-9])[0-9]{10}$/);
    return expression.test(value);
};

const emailValidator = (value) => {
    const expression = new RegExp(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );
    return expression.test(value);
};

const checkBlankFields = (payload) => {
    let result = true;
    Object.values(payload).forEach((value) => {
        if (!value) result = false;
    });
    return result;
};

const loginValidator = (payload) => {
    if (checkBlankFields(payload) === false) {
        throw new Error(
            JSON.stringify({
                status: statusCode.BAD_REQUEST,
                message: MESSAGE_ERROR.BLANK_FIELD,
            })
        );
    } else {
        if (usernameValidator(payload.username.toLowerCase()) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_USERNAME,
                })
            );
        }
        if (charactersValidator(payload.password) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_PASSWORD,
                })
            );
        }
    }
    return {
        status: statusCode.OK,
        message: MESSAGE_SUCCESS.VALIDFIELD,
    };
};

const registerValidator = (payload) => {
    if (checkBlankFields(payload) !== false) {
        if (usernameValidator(payload.username.toLowerCase()) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_USERNAME,
                })
            );
        }
        if (phonenumberValidator(payload.phone) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_PHONENUMBER,
                })
            );
        }
        if (emailValidator(payload.email.toLowerCase()) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_EMAIL,
                })
            );
        }
        if (charactersValidator(payload.password) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_PASSWORD,
                })
            );
        }
        if (
            passwordVerification(payload.password, payload.verification) ===
            false
        ) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_VERIFICATION,
                })
            );
        }
        return {
            status: statusCode.OK,
            message: MESSAGE_SUCCESS.VALID_FIELD,
        };
    }
    throw new Error(
        JSON.stringify({
            status: statusCode.BAD_REQUEST,
            message: MESSAGE_ERROR.BLANK_FIELD,
        })
    );
};

const postValidator = (payload) => {
    if (checkBlankFields(payload) === false) {
        throw new Error(
            JSON.stringify({
                status: statusCode.BAD_REQUEST,
                message: MESSAGE_ERROR.BLANK_FIELD,
            })
        );
    }
    return {
        status: statusCode.OK,
        message: MESSAGE_SUCCESS.VALID_FIELD,
    };
};

export default { registerValidator, loginValidator, postValidator };
