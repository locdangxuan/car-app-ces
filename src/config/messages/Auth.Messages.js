const MESSAGE_ERROR = {
    INVALID_USERNAME:
        'Your username must not contain special character and must be more than 7 digits-long',
    INVALID_PASSWORD:
        'Your password must contain a capital and must be more than 8 digits-long',
    INVALID_EMAIL: 'Your email is not in the right format',
    INVALID_VERIFICATION: 'Your password and password verification must match',
    INVALID_PHONENUMBER: 'Your phone number is invalid',
    BLANK_FIELD: 'Please fill in all the fields above',
    SERVER_DOWN: 'The Server is not working right now, please try again later',
};

const MESSAGE_SUCCESS = {
    VALID_FIELD: 'Success',
};

export { MESSAGE_ERROR, MESSAGE_SUCCESS };
