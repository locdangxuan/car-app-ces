import { MODAL_ON, MODAL_OFF } from 'config/constants/Action.Types';

const initState = { isModalOn: true };

const modalReducer = (state = initState, action) => {
    switch (action.type) {
        case MODAL_ON:
            return { isModalOn: true };
        case MODAL_OFF:
            return { isModalOn: false };
        default:
            return state;
    }
};

export default modalReducer;
