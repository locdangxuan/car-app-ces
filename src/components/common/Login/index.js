import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'components/common';
import PropTypes from 'prop-types';
import authActions from 'redux/actions/Action.Auth';

const Login = (props) => {
    const onChangeHandler = (event) => props.onChangeHandler(event.target);
    const { username, password, invalidFields } = props;
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
                id="password"
                type="password"
                placeholder="Password"
                onChange={onChangeHandler}
                value={password}
                isError={isErrorExist('password')}
            />
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
    invalidFields: PropTypes.arrayOf(PropTypes.string),
};

Login.defaultProps = {
    username: '',
    password: '',
    onChangeHandler: () => {},
    invalidFields: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
