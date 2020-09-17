import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'components/common';
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
        invalidFields,
    } = props;
    const isErrorExist = (string) => {
        return invalidFields.includes(string) ? 'true' : '';
    };
    return (
        <div>
            <Input
                id="username"
                type="text"
                placeholder="Username"
                onChange={onChangeHandler}
                value={username}
                isError={isErrorExist('username')}
            />
            <Input
                id="displayname"
                type="text"
                placeholder="Display Name"
                onChange={onChangeHandler}
                value={displayname}
                isError={isErrorExist('displayName')}
            />
            <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={onChangeHandler}
                value={email}
                isError={isErrorExist('email')}
            />
            <Input
                id="phonenumber"
                type="text"
                placeholder="Contact No."
                onChange={onChangeHandler}
                value={phonenumber}
                isError={isErrorExist('phone')}
            />
            <Input
                id="password"
                type="password"
                placeholder="Password"
                onChange={onChangeHandler}
                value={password}
                isError={isErrorExist('password')}
            />
            <Input
                id="verification"
                type="password"
                placeholder="Confirm password"
                onChange={onChangeHandler}
                value={verification}
                isError={isErrorExist('verification')}
            />
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
    invalidFields: PropTypes.arrayOf(PropTypes.string),
};

Register.defaultProps = {
    username: '',
    displayname: '',
    phonenumber: '',
    email: '',
    password: '',
    verification: '',
    onInputChange: {},
    invalidFields: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
