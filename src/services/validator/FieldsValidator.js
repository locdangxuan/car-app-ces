import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'config/messages/Messages.Auth';
import * as statusCode from 'config/constants/StatusCode';

const passwordVerification = (password, verification) => {
    return password === verification;
};

const lengthValidator = (value) => {
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
    const invalidKeys = [];
    Object.entries(payload).forEach((entry) => {
        const [key, value] = entry;
        if (!value) {
            invalidKeys.push(key);
            result = false;
        }
    });
    return { invalidKeys, result };
};

const loginValidator = (payload) => {
    if (checkBlankFields(payload).result === false) {
        throw new Error(
            JSON.stringify({
                status: statusCode.BAD_REQUEST,
                message: MESSAGE_ERROR.BLANK_FIELD,
                invalidFields: checkBlankFields(payload).invalidKeys,
            })
        );
    } else {
        if (lengthValidator(payload.username.toLowerCase()) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_USERNAME,
                    invalidFields: ['username'],
                })
            );
        }
        if (lengthValidator(payload.password) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_PASSWORD,
                    invalidFields: ['password'],
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
    if (checkBlankFields(payload).result !== false) {
        if (lengthValidator(payload.username.toLowerCase()) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_USERNAME,
                    invalidFields: ['username'],
                })
            );
        }
        if (phonenumberValidator(payload.phone) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_PHONENUMBER,
                    invalidFields: ['phone'],
                })
            );
        }
        if (emailValidator(payload.email.toLowerCase()) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_EMAIL,
                    invalidFields: ['email'],
                })
            );
        }
        if (lengthValidator(payload.password) === false) {
            throw new Error(
                JSON.stringify({
                    status: statusCode.BAD_REQUEST,
                    message: MESSAGE_ERROR.INVALID_PASSWORD,
                    invalidFields: ['password'],
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
                    invalidFields: ['verification'],
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
            invalidFields: checkBlankFields(payload).invalidKeys,
        })
    );
};

const postValidator = (payload) => {
    if (checkBlankFields(payload).result === false) {
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
