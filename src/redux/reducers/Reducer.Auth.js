import {
    REGISTER,
    LOGIN,
    UPDATE_FIELD_AUTH,
    MODAL_OFF,
} from 'config/constants/Action.Types';
import validator from 'services/Validator/Validator.Register';

const initState = {
    username: '',
    password: '',
    displayname: '',
    phonenumber: '',
    email: '',
    verification: '',
};

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_FIELD_AUTH:
            return { ...state, [action.key]: action.value };
        case LOGIN:
            return { ...state };
        case REGISTER: {
            const valid = validator(state);
            const { username, password } = state;
            if (valid.result === true) {
                return {
                    ...state,
                    ...initState,
                    username,
                    password,
                    message: valid.message,
                    registerDone: valid.result,
                };
            }
            return {
                ...state,
                message: valid.message,
                registerDone: valid.result,
            };
        }
        case MODAL_OFF:
            return { ...state, ...initState };
        default:
            return state;
    }
};

export default authReducer;
