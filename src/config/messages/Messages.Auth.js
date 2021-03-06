const MESSAGE_ERROR = {
    INVALID_FIELD: 'Please double check your information',
    INVALID_USERNAME:
        'Your username must contain at least 8 characters and less than 30 characters',
    INVALID_PASSWORD:
        'Your password must contain at least 8 characters and less than 30 characters',
    INVALID_DISPLAYNAME:
        'Your display name must contain at least 8 characters and less than 30 characters',
    INVALID_EMAIL: 'Your email is not in the right format',
    INVALID_VERIFICATION: 'Your password and password verification must match',
    INVALID_PHONENUMBER: 'Your phone number is invalid',
    BLANK_FIELD: 'Please fill in the field above',
    SERVER_DOWN: 'The Server is not working right now, please try again later',
    UNAUTHORIZED: 'You have not logged in, please login and try again',
};

const MESSAGE_SUCCESS = {
    VALID_FIELD: 'Success',
};

export { MESSAGE_ERROR, MESSAGE_SUCCESS };
