import React from 'react';
import { connect } from 'react-redux';
import authActions from 'redux/actions/Action.Auth';
import PropTypes from 'prop-types';
import { REGISTER, LOGIN } from 'config/constants/Action.Types';
import { modal } from 'config/constants/Utils';
import ModalBase from './Modal';

const Modal = (props) => {
    const { onSubmitLogin, onSubmitRegister, type, isSuccess } = props;
    const onSubmitHandler = (payload) => {
        switch (type) {
            case REGISTER.REQUEST:
                onSubmitRegister(payload);
                break;
            case LOGIN.REQUEST:
                onSubmitLogin(payload);
                break;
            default:
                break;
        }
    };
    switch (type) {
        case REGISTER.REQUEST:
            return (
                <ModalBase
                    type={modal.type.register}
                    handlerToggle={props.handlerToggle}
                    onSubmit={onSubmitHandler}
                />
            );
        case LOGIN.REQUEST:
            return (
                <ModalBase
                    type={modal.type.login}
                    handlerToggle={props.handlerToggle}
                    onSubmit={onSubmitHandler}
                />
            );
        case modal.type.alert:
            return (
                <ModalBase
                    type={modal.type.alert}
                    onSubmit={props.onSubmit}
                    handlerToggle={props.handlerToggle}
                    warningType={props.warningType}
                    alertMessage={props.alertMessage}
                    isSuccess={isSuccess}
                />
            );
        default:
            return <div />;
    }
};

Modal.propTypes = {
    type: PropTypes.string,
    handlerToggle: PropTypes.func,
    onSubmit: PropTypes.func,
    onSubmitLogin: PropTypes.func,
    onSubmitRegister: PropTypes.func,
    alertMessage: PropTypes.string,
    isSuccess: PropTypes.bool,
    warningType: PropTypes.bool,
};

Modal.defaultProps = {
    type: REGISTER,
    handlerToggle: () => {},
    onSubmitLogin: () => {},
    onSubmitRegister: () => {},
    alertMessage: '',
    isSuccess: false,
    warningType: false,
    onSubmit: () => {},
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmitRegister: (payload) => dispatch(authActions.register(payload)),
        onSubmitLogin: (payload) => dispatch(authActions.login(payload)),
    };
};

export default connect(null, mapDispatchToProps)(Modal);
