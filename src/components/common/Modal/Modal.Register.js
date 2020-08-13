import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, ModalSpan } from 'components/common';
import {
    UPDATE_FIELD_AUTH,
    REGISTER,
    MODAL_OFF,
} from 'config/constants/Action.Types';
import PropTypes from 'prop-types';
import { Wrapper, Content, Header, Footer, Body } from './Modal.Styles';

const RegisterForm = (props) => {
    const onChangeHandler = (event) => {
        props.onInputChange(event.target);
    };
    const onSubmitRegisterHandler = (
        username,
        email,
        password,
        verification
    ) => () => {
        const payload = { username, email, password, verification };
        return props.onSubmitRegister(payload);
    };
    const onCancelHandler = () => props.onCancelRegister();

    const {
        username,
        displayname,
        email,
        phonenumber,
        password,
        verification,
        message,
        registerDone,
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
                    />
                    <Input
                        id="displayname"
                        type="text"
                        placeholder="Display Name"
                        onChange={onChangeHandler}
                    />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Email"
                        onChange={onChangeHandler}
                    />
                    <Input
                        id="phonenumber"
                        type="text"
                        placeholder="Contact No."
                        onChange={onChangeHandler}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={onChangeHandler}
                    />
                    <Input
                        id="verification"
                        type="password"
                        placeholder="Type your password again"
                        onChange={onChangeHandler}
                    />
                </Body>
                <ModalSpan isValid={registerDone}>{message}</ModalSpan>
                <Footer>
                    <Button
                        onClick={onSubmitRegisterHandler(
                            username,
                            displayname,
                            email,
                            phonenumber,
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
            dispatch({
                type: UPDATE_FIELD_AUTH,
                key: payload.id,
                value: payload.value,
            }),
        onSubmitRegister: (payload) => dispatch({ type: REGISTER, payload }),
        onCancelRegister: () => dispatch({ type: MODAL_OFF }),
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
    onCancelRegister: PropTypes.func,
    registerDone: PropTypes.bool,
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
    onCancelRegister: {},
    registerDone: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
