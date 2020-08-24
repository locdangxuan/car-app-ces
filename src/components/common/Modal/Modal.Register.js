import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, ModalSpan, Loader } from 'components/common';
import PropTypes from 'prop-types';
import authAction from 'redux/actions/Action.Auth';
import { Wrapper, Content, Header, Footer, Body } from './Modal.Styles';

const RegisterForm = (props) => {
    const onChangeHandler = (event) => {
        props.onInputChange(event.target);
    };
    const onSubmitRegisterHandler = (
        username,
        phone,
        displayName,
        email,
        password,
        verification
    ) => () => {
        const payload = {
            username: username.toLowerCase(),
            phone,
            displayName,
            email,
            password,
            verification,
        };
        return props.onSubmitRegister(payload);
    };
    const onCancelHandler = () => props.handlerToggle();

    const {
        username,
        displayname,
        email,
        phonenumber,
        password,
        verification,
        message,
        registerDone,
        pending,
    } = props;
    return (
        <Wrapper>
            <Content>
                <Header>REGISTER</Header>
                <Body>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={onChangeHandler}
                        value={username}
                    />
                    <Input
                        id="displayname"
                        type="text"
                        placeholder="Display Name"
                        onChange={onChangeHandler}
                        value={displayname}
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={onChangeHandler}
                        value={email}
                    />
                    <Input
                        id="phonenumber"
                        type="text"
                        placeholder="Contact No."
                        onChange={onChangeHandler}
                        value={phonenumber}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={onChangeHandler}
                        value={password}
                    />
                    <Input
                        id="verification"
                        type="password"
                        placeholder="Confirm password"
                        onChange={onChangeHandler}
                        value={verification}
                    />
                </Body>
                {pending && <Loader />}
                <ModalSpan isValid={registerDone}>{message}</ModalSpan>
                <Footer>
                    <Button
                        onClick={onSubmitRegisterHandler(
                            username,
                            phonenumber,
                            displayname,
                            email,
                            password,
                            verification
                        )}
                        isSuccess
                    >
                        Register
                    </Button>
                    <Button onClick={onCancelHandler} isSuccess={false}>
                        Cancel
                    </Button>
                </Footer>
            </Content>
        </Wrapper>
    );
};

const mapStateToProps = (state) => ({
    ...state.authReducer,
});
const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (payload) =>
            dispatch(authAction.updateFieldAuth(payload)),
        onSubmitRegister: (payload) => dispatch(authAction.register(payload)),
    };
};

RegisterForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    displayname: PropTypes.string,
    phonenumber: PropTypes.string,
    email: PropTypes.string,
    verification: PropTypes.string,
    message: PropTypes.string,
    onInputChange: PropTypes.func,
    onSubmitRegister: PropTypes.func,
    registerDone: PropTypes.bool,
    handlerToggle: PropTypes.func,
    pending: PropTypes.bool,
};

RegisterForm.defaultProps = {
    username: '',
    displayname: '',
    phonenumber: '',
    email: '',
    password: '',
    verification: '',
    message: '',
    onInputChange: {},
    onSubmitRegister: {},
    registerDone: false,
    handlerToggle: {},
    pending: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
