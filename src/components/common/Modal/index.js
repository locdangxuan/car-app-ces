import React from 'react';
import PropTypes from 'prop-types';
import { REGISTER, LOGIN } from 'config/constants/Action.Types';
import LoginForm from './Modal.Login';
import RegisterForm from './Modal.Register';

const Modal = (props) => {
    switch (props.type) {
        case REGISTER:
            return <RegisterForm />;
        case LOGIN:
            return <LoginForm />;
        default:
            return <div />;
    }
};

Modal.propTypes = {
    type: PropTypes.string,
};

Modal.defaultProps = {
    type: REGISTER,
};

export default Modal;
