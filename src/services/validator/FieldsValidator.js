import { MESSAGE_ERROR, MESSAGE_SUCCESS } from 'config/messages/Messages.Auth';
import * as statusCode from 'config/constants/StatusCode';
import * as POST_MESSAGE from 'config/messages/Messages.Post';

const passwordVerification = (password, verification) => {
    return password === verification;
};

const lengthValidator = (value) => {
    return value.length > 7 && value.length < 31;
};

const numberValidator = (value) => {
    const expression = new RegExp(/^(?=.*\d)(?=.*[0-9])[0-9]/);
    return expression.test(value);
};

const emailValidator = (value) => {
    const expression = new RegExp(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
    );
    return expression.test(value);
};

const characterValidator = (value) => {
    const expression = new RegExp(/[`~!@#$%^&*,.<>;':"/[\]|{}()=_+-]/);
    return !expression.test(value);
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
        if (
            numberValidator(payload.phone) === false ||
            payload.phone.length < 10 ||
            characterValidator(payload.phone) === false
        ) {
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

const postValidator = (payload, type) => {
    let isValid = true;
    const invalidFields = [];
    if (payload.distanceTraveled <= 0) {
        isValid = false;
        invalidFields.push({
            name: 'distanceTraveled',
            message: POST_MESSAGE.MESSAGE_ERROR.NEGATIVE_DISTANCE_TRAVELED,
        });
    } else if (numberValidator(payload.distanceTraveled) === false) {
        isValid = false;
        invalidFields.push({
            name: 'distanceTraveled',
            message: POST_MESSAGE.MESSAGE_ERROR.INVALID_DISTANCE_TRAVELED,
        });
    }
    if (payload.price <= 0) {
        isValid = false;
        invalidFields.push({
            name: 'price',
            message: POST_MESSAGE.MESSAGE_ERROR.NEGATIVE_PRICE,
        });
    } else if (numberValidator(payload.price) === false) {
        isValid = false;
        invalidFields.push({
            name: 'price',
            message: POST_MESSAGE.MESSAGE_ERROR.INVALID_PRICE,
        });
    }
    if (payload.name === '') {
        isValid = false;
        invalidFields.push({
            name: 'name',
            message: POST_MESSAGE.MESSAGE_ERROR.EMPTY_FIELD,
        });
    } else if (characterValidator(payload.name) === false) {
        isValid = false;
        invalidFields.push({
            name: 'name',
            message: POST_MESSAGE.MESSAGE_ERROR.INVALID_NAME,
        });
    }
    if (payload.brand === '') {
        isValid = false;
        invalidFields.push({
            name: 'brand',
            message: POST_MESSAGE.MESSAGE_ERROR.INVALID_BRAND,
        });
    }
    if (payload.model === '') {
        isValid = false;
        invalidFields.push({
            name: 'model',
            message: POST_MESSAGE.MESSAGE_ERROR.INVALID_MODEL,
        });
    }
    if (payload.year === '') {
        isValid = false;
        invalidFields.push({
            name: 'year',
            message: POST_MESSAGE.MESSAGE_ERROR.INVALID_YEAR,
        });
    }
    if (payload.fuelType === '') {
        isValid = false;
        invalidFields.push({
            name: 'fuelType',
            message: POST_MESSAGE.MESSAGE_ERROR.INVALID_FUEL_TYPE,
        });
    }
    if (payload.information.length === 0) {
        isValid = false;
        invalidFields.push({
            name: 'information',
            message: POST_MESSAGE.MESSAGE_ERROR.EMPTY_INFORMATION,
        });
    }
    if (type !== 'update') {
        if (payload.images.length === 0) {
            isValid = false;
            invalidFields.push({
                name: 'images',
                message: POST_MESSAGE.MESSAGE_ERROR.EMPTY_IMAGES,
            });
        }
    }
    if (isValid === false) {
        throw new Error(
            JSON.stringify({
                status: statusCode.BAD_REQUEST,
                message: MESSAGE_ERROR.INVALID_FIELD,
                invalidFields,
            })
        );
    }
    return {
        status: statusCode.OK,
        message: MESSAGE_SUCCESS.VALID_FIELD,
    };
};

export default {
    registerValidator,
    loginValidator,
    postValidator,
    characterValidator,
};
