import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Span } from 'components/common';
import PropTypes from 'prop-types';
import {
    UPDATE_FIELD_AUTH,
    LOGIN,
    MODAL_OFF,
} from 'config/constants/Action.Types';
import { Wrapper, Content, Header, Footer, Body } from './Modal.Styles';

const LoginForm = (props) => {
    const onChangeHandler = (event) => props.onChangeHandler(event.target);
    const onSubmitHandler = (username, password) => () => {
        props.onSubmitLogin(username, password);
    };
    const onCancelHandler = () => props.onCancelLogin();

    const { username, password, valid, message } = props;
    return (
        <Wrapper>
            <Content>
                <Header>LOGIN</Header>
                <Body>
                    <Input
                        id="username"
                        type="text"
                        placeholder="Username"
                        onChange={onChangeHandler}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={onChangeHandler}
                    />
                </Body>
                <Span isValid={valid}>{message}</Span>
                <Footer>
                    <Button
                        onClick={onSubmitHandler(username, password)}
                        isSuccess
                    >
                        Login
                    </Button>
                    <Button onClick={onCancelHandler} isSuccess={false}>
                        Cancel
                    </Button>
                </Footer>
            </Content>
        </Wrapper>
    );
};
const mapStateToProps = (state) => ({ ...state.authReducer });

const mapDispatchToProps = (dispatch) => ({
    onChangeHandler: (payload) =>
        dispatch({
            type: UPDATE_FIELD_AUTH,
            key: payload.id,
            value: payload.value,
        }),
    onSubmitLogin: (username, password) => {
        const payload = { username, password };
        dispatch({ type: LOGIN, payload });
    },
    onCancelLogin: () => dispatch({ type: MODAL_OFF }),
});

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    valid: PropTypes.bool,
    message: PropTypes.string,
    onChangeHandler: PropTypes.func,
    onSubmitLogin: PropTypes.func,
    onCancelLogin: PropTypes.func,
};

LoginForm.defaultProps = {
    username: '',
    password: '',
    valid: false,
    message: '',
    onChangeHandler: {},
    onSubmitLogin: {},
    onCancelLogin: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
