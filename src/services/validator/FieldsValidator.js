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
            invalidKeys.push({ name: key, message: MESSAGE_ERROR.BLANK_FIELD });
            result = false;
        }
    });
    return { invalidKeys, result };
};
const loginValidator = (payload) => {
    let isValid = true;
    let invalidFields = [];
    const blankValidator = checkBlankFields(payload);
    if (blankValidator.result !== false) {
        if (lengthValidator(payload.username.toLowerCase()) === false) {
            isValid = false;
            invalidFields.push({
                name: 'username',
                message: MESSAGE_ERROR.INVALID_USERNAME,
            });
        }
        if (lengthValidator(payload.password) === false) {
            isValid = false;
            invalidFields.push({
                name: 'password',
                message: MESSAGE_ERROR.INVALID_PASSWORD,
            });
        }
    } else {
        isValid = false;
        invalidFields = blankValidator.invalidKeys;
    }
    if (isValid) {
        return {
            status: statusCode.OK,
            message: MESSAGE_SUCCESS.VALID_FIELD,
        };
    }
    throw new Error(
        JSON.stringify({
            status: statusCode.BAD_REQUEST,
            message: MESSAGE_ERROR.INVALID_FIELD,
            invalidFields,
        })
    );
};

const registerValidator = (payload) => {
    let isValid = true;
    let invalidFields = [];
    const blankValidator = checkBlankFields(payload);
    if (blankValidator.result !== false) {
        if (lengthValidator(payload.username.toLowerCase()) === false) {
            isValid = false;
            invalidFields.push({
                name: 'username',
                message: MESSAGE_ERROR.INVALID_USERNAME,
            });
        }
        if (lengthValidator(payload.displayName) === false) {
            isValid = false;
            invalidFields.push({
                name: 'displayName',
                message: MESSAGE_ERROR.INVALID_USERNAME,
            });
        }
        if (phonenumberValidator(payload.phone) === false) {
            isValid = false;
            invalidFields.push({
                name: 'phone',
                message: MESSAGE_ERROR.INVALID_PHONENUMBER,
            });
        }
        if (emailValidator(payload.email.toLowerCase()) === false) {
            isValid = false;
            invalidFields.push({
                name: 'email',
                message: MESSAGE_ERROR.INVALID_EMAIL,
            });
        }
        if (lengthValidator(payload.password) === false) {
            isValid = false;
            invalidFields.push({
                name: 'password',
                message: MESSAGE_ERROR.INVALID_PASSWORD,
            });
        }
        if (
            passwordVerification(payload.password, payload.verification) ===
            false
        ) {
            isValid = false;
            invalidFields.push({
                name: 'verification',
                message: MESSAGE_ERROR.INVALID_VERIFICATION,
            });
        }
    } else {
        isValid = false;
        invalidFields = blankValidator.invalidKeys;
    }
    if (isValid) {
        return {
            status: statusCode.OK,
            message: MESSAGE_SUCCESS.VALID_FIELD,
        };
    }
    throw new Error(
        JSON.stringify({
            status: statusCode.BAD_REQUEST,
            message: MESSAGE_ERROR.INVALID_FIELD,
            invalidFields,
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
