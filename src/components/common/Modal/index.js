import React from 'react';
import PropTypes from 'prop-types';
import { REGISTER, LOGIN } from 'config/constants/Action.Types';
import LoginForm from './Modal.Login';
import RegisterForm from './Modal.Register';

const Modal = (props) => {
    switch (props.type) {
        case REGISTER.REQUEST:
            return <RegisterForm handlerToggle={props.handlerToggle} />;
        case LOGIN.REQUEST:
            return <LoginForm handlerToggle={props.handlerToggle} />;
        default:
            return <div />;
    }
};

Modal.propTypes = {
    type: PropTypes.string,
    handlerToggle: PropTypes.func,
};

Modal.defaultProps = {
    type: REGISTER,
    handlerToggle: {},
};

export default Modal;
