import {
    MESSAGE_ERROR,
    MESSAGE_SUCCESS,
} from 'config/messages/Register.Messages';

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
    const expression = new RegExp(/^(?=.*\d)(?=.*[a-z])[a-z0-9]{8,15}$/);
    return expression.test(value);
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
    return (
        payload.username !== '' &&
        payload.diplayname !== '' &&
        payload.phonenumber !== '' &&
        payload.password !== '' &&
        payload.email !== '' &&
        payload.passwordVerification !== ''
    );
};

const validator = (payload) => {
    if (checkBlankFields(payload) !== false) {
        if (usernameValidator(payload.username.toLowerCase()) === false) {
            return {
                result: false,
                message: MESSAGE_ERROR.invalidUsername,
            };
        }
        if (phonenumberValidator(payload.phonenumber) === false) {
            return {
                result: false,
                message: MESSAGE_ERROR.invalidPhonenumber,
            };
        }
        if (emailValidator(payload.email.toLowerCase()) === false) {
            return {
                result: false,
                message: MESSAGE_ERROR.invalidEmail,
            };
        }
        if (charactersValidator(payload.password) === false) {
            return {
                result: false,
                message: MESSAGE_ERROR.invalidPassword,
            };
        }
        if (
            passwordVerification(payload.password, payload.verification) ===
            false
        ) {
            return {
                result: false,
                message: MESSAGE_ERROR.invalidVerification,
            };
        }
        return {
            result: true,
            message: MESSAGE_SUCCESS.validFields,
        };
    }
    return {
        result: false,
        message: MESSAGE_ERROR.blankField,
    };
};

export default validator;
