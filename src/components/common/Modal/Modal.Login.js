import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, ModalSpan, Loader } from 'components/common';
import PropTypes from 'prop-types';
import authActions from 'redux/actions/Action.Auth';
import { Wrapper, Content, Header, Footer, Body } from './Modal.Styles';

const LoginForm = (props) => {
    const onChangeHandler = (event) => props.onChangeHandler(event.target);
    const onSubmitHandler = (username, password) => () => {
        props.onSubmitLogin({ username, password });
    };
    const onCancelHandler = () => props.handlerToggle();

    const { username, password, message, valid, pending } = props;
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
                        value={username}
                    />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Password"
                        onChange={onChangeHandler}
                        value={password}
                    />
                </Body>
                {pending && <Loader />}
                <ModalSpan isValid={valid}>{message}</ModalSpan>
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
        dispatch(authActions.updateFieldAuth(payload)),
    onSubmitLogin: (payload) => dispatch(authActions.login(payload)),
});

LoginForm.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    valid: PropTypes.bool,
    message: PropTypes.string,
    onChangeHandler: PropTypes.func,
    onSubmitLogin: PropTypes.func,
    handlerToggle: PropTypes.func,
    pending: PropTypes.bool,
};

LoginForm.defaultProps = {
    username: '',
    password: '',
    valid: false,
    message: '',
    onChangeHandler: {},
    onSubmitLogin: {},
    handlerToggle: {},
    pending: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
