import React from 'react';
import { connect } from 'react-redux';
import { Input, ModalSpan } from 'components/common';
import PropTypes from 'prop-types';
import authActions from 'redux/actions/Action.Auth';

const Login = (props) => {
    const onChangeHandler = (event) => props.onChangeHandler(event.target);
    const { username, password, fieldsValidity, fieldsErrorMessage } = props;
    return (
        <div>
            <Input
                id="username"
                type="text"
                placeholder="Username"
                onChange={onChangeHandler}
                value={username}
                isError={!fieldsValidity['username']}
            />
            {fieldsValidity['username'] === false && (
                <ModalSpan isValid={false}>
                    {fieldsErrorMessage['username']}
                </ModalSpan>
            )}
            <Input
                id="password"
                type="password"
                placeholder="Password"
                onChange={onChangeHandler}
                value={password}
                isError={!fieldsValidity['password']}
            />
            {fieldsValidity['password'] === false && (
                <ModalSpan isValid={false}>
                    {fieldsErrorMessage['password']}
                </ModalSpan>
            )}
        </div>
    );
};
const mapStateToProps = (state) => ({ ...state.authReducer });

const mapDispatchToProps = (dispatch) => ({
    onChangeHandler: (payload) =>
        dispatch(authActions.updateFieldAuth(payload)),
});

Login.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    onChangeHandler: PropTypes.func,
    fieldsValidity: PropTypes.objectOf(PropTypes.bool),
    fieldsErrorMessage: PropTypes.objectOf(PropTypes.string),
};

Login.defaultProps = {
    username: '',
    password: '',
    onChangeHandler: {},
    fieldsValidity: {
        username: true,
        password: true,
    },
    fieldsErrorMessage: {
        username: '',
        password: '',
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
