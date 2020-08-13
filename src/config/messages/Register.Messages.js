const MESSAGE_ERROR = {
    invalidUsername:
        'Your username must not contain special character and must be more than 7 digits-long',
    invalidPassword:
        'Your password must contain a capital and must be more than 8 digits-long',
    invalidEmail: 'Your email is not in the right format',
    invalidVerification: 'Your password and password verification must match',
    invalidPhonenumber: 'Your phone number is invalid',
    blankField: 'Please fill in all the fields above',
};

const MESSAGE_SUCCESS = {
    validFields: 'Success',
};

export { MESSAGE_ERROR, MESSAGE_SUCCESS };
