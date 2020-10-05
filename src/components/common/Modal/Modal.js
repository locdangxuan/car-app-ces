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
        const { onSubmit } = props;
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
                    const payload = {
                        username: username.toLowerCase(),
                        phone: phonenumber,
                        displayName: displayname,
                        email,
                        password,
                        verification,
                    };
                    onSubmit(payload);
                }
                break;
            case modal.type.login:
                {
                    const { username, password } = props;
                    const payload = {
                        username: username.toLowerCase(),
                        password,
                    };
                    onSubmit(payload);
                }
                break;
            default:
                onSubmit(true);
                break;
        }
    };
    const onCancelHandler = () => {
        props.handlerToggle();
        props.onCancel();
    };
    const { message, isValid, pending, type, warningType } = props;
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
                    {warningType === true ? (
                        <Footer type="dual">
                            <Button onClick={onCancelHandler} isSuccess>
                                Cancel
                            </Button>
                            <Button
                                onClick={onSubmitHandler}
                                isSuccess={props.isSuccess}
                            >
                                OK
                            </Button>
                        </Footer>
                    ) : (
                        <Footer type="single">
                            <Button
                                onClick={onCancelHandler}
                                isSuccess={props.isSuccess}
                            >
                                OK
                            </Button>
                        </Footer>
                    )}
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
    warningType: PropTypes.bool,
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
    warningType: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalBase);
