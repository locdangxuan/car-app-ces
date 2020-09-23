import React from 'react';
import { connect } from 'react-redux';
import { Input, ModalSpan } from 'components/common';
import PropTypes from 'prop-types';
import authAction from 'redux/actions/Action.Auth';

const Register = (props) => {
    const onChangeHandler = (event) => {
        props.onInputChange(event.target);
    };
    const {
        username,
        displayname,
        email,
        phonenumber,
        password,
        verification,
        fieldsErrorMessage,
        fieldsValidity,
    } = props;
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
                id="displayname"
                type="text"
                placeholder="Display Name"
                onChange={onChangeHandler}
                value={displayname}
                isError={!fieldsValidity['displayName']}
            />
            {fieldsValidity['displayName'] === false && (
                <ModalSpan isValid={false}>
                    {fieldsErrorMessage['displayName']}
                </ModalSpan>
            )}
            <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={onChangeHandler}
                value={email}
                isError={!fieldsValidity['email']}
            />
            {fieldsValidity['email'] === false && (
                <ModalSpan isValid={false}>
                    {fieldsErrorMessage['email']}
                </ModalSpan>
            )}
            <Input
                id="phonenumber"
                type="text"
                placeholder="Contact No."
                onChange={onChangeHandler}
                value={phonenumber}
                isError={!fieldsValidity['phone']}
            />
            {fieldsValidity['phone'] === false && (
                <ModalSpan isValid={false}>
                    {fieldsErrorMessage['phone']}
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
            <Input
                id="verification"
                type="password"
                placeholder="Confirm password"
                onChange={onChangeHandler}
                value={verification}
                isError={!fieldsValidity['verification']}
            />
            {fieldsValidity['verification'] === false && (
                <ModalSpan isValid={false}>
                    {fieldsErrorMessage['verification']}
                </ModalSpan>
            )}
        </div>
    );
};

const mapStateToProps = (state) => ({
    ...state.authReducer,
});
const mapDispatchToProps = (dispatch) => {
    return {
        onInputChange: (payload) =>
            dispatch(authAction.updateFieldAuth(payload)),
    };
};

Register.propTypes = {
    username: PropTypes.string,
    password: PropTypes.string,
    displayname: PropTypes.string,
    phonenumber: PropTypes.string,
    email: PropTypes.string,
    verification: PropTypes.string,
    onInputChange: PropTypes.func,
    fieldsValidity: PropTypes.objectOf(PropTypes.bool),
    fieldsErrorMessage: PropTypes.objectOf(PropTypes.string),
};

Register.defaultProps = {
    username: '',
    displayname: '',
    phonenumber: '',
    email: '',
    password: '',
    verification: '',
    onInputChange: {},
    fieldsValidity: {
        username: true,
        displayName: true,
        email: true,
        phone: true,
        password: true,
        verification: true,
    },
    fieldsErrorMessage: {
        username: '',
        displayName: '',
        email: '',
        phone: '',
        password: '',
        verification: '',
    },
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
