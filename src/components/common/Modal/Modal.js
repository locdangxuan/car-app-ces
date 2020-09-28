/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import {
    Button,
    ModalSpan,
    Loader,
    Login,
    Register,
    Span,
} from 'components/common';
import PropTypes from 'prop-types';
import authActions from 'redux/actions/Action.Auth';
import { modal } from 'config/constants/Utils';
import { Wrapper, Content, Header, Footer, Body } from './styles';

const ModalBase = (props) => {
    let alertMessage = '';
    const onSubmitHandler = () => {
        let payload = {};
        switch (props.type) {
            case modal.type.register:
                {
                    const {
                        username,
                        phonenumber,
                        displayname,
                        email,
                        password,
                        verification,
                    } = props;
                    payload = {
                        username: username.toLowerCase(),
                        phone: phonenumber,
                        displayName: displayname,
                        email,
                        password,
                        verification,
                    };
                }
                break;
            case modal.type.login:
                {
                    const { username, password } = props;
                    payload = { username: username.toLowerCase(), password };
                }
                break;
            default:
                break;
        }
        const { onSubmit } = props;
        onSubmit(payload);
    };
    const onCancelHandler = () => {
        props.handlerToggle();
        props.onCancel();
    };
    const { message, isValid, pending, type } = props;
    if (type === modal.type.alert) {
        alertMessage = props.alertMessage;
    }
    return (
        <Wrapper>
            {type === modal.type.alert ? (
                <Content>
                    <Header>{type}</Header>
                    <Body>
                        <Span isValid={props.isSuccess}>{alertMessage}</Span>
                    </Body>
                    <Footer type="single">
                        <Button
                            onClick={onCancelHandler}
                            isSuccess={props.isSuccess}
                        >
                            OK
                        </Button>
                    </Footer>
                </Content>
            ) : (
                <Content>
                    <Header>{type}</Header>
                    <Body>
                        {type === modal.type.register && <Register />}
                        {type === modal.type.login && <Login />}
                    </Body>
                    {pending && <Loader type="SPAN-STYLE" />}
                    <ModalSpan isValid={isValid}>{message}</ModalSpan>
                    <Footer type="dual">
                        <Button onClick={onCancelHandler} isSuccess={false}>
                            CANCEL
                        </Button>
                        <Button onClick={onSubmitHandler} isSuccess>
                            {type}
                        </Button>
                    </Footer>
                </Content>
            )}
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    ...state.authReducer,
});

const mapDispatchToProps = (dispatch) => ({
    onCancel: () => dispatch(authActions.onCancel()),
});

ModalBase.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    displayname: PropTypes.string,
    phonenumber: PropTypes.string,
    email: PropTypes.string,
    verification: PropTypes.string,
    message: PropTypes.string,
    onSubmit: PropTypes.func,
    isValid: PropTypes.bool,
    handlerToggle: PropTypes.func,
    pending: PropTypes.bool,
    type: PropTypes.string,
    onCancel: PropTypes.func,
    alertMessage: PropTypes.string,
    isSuccess: PropTypes.bool,
};

ModalBase.defaultProps = {
    username: '',
    displayname: '',
    phonenumber: '',
    email: '',
    password: '',
    verification: '',
    message: '',
    onSubmit: () => {},
    isValid: false,
    handlerToggle: () => {},
    pending: false,
    type: '',
    onCancel: () => {},
    alertMessage: '',
    isSuccess: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBase);
