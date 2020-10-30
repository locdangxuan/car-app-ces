/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-shadow */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Button, Field, Loader, ModalSpan, Span } from 'components/common';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import action from 'redux/actions/Action.User';
import { connect } from 'react-redux';
import {
    Wrapper,
    Submit,
    useStyle,
    theme,
    StyledLink,
    DisableTextField,
    CustomTextField,
} from './styles';

const Profile = (props) => {
    const formState = {
        name: '',
        phoneNumber: '',
        email: '',
        displayName: '',
        password: '',
        verification: '',
        newPassword: '',
        count: 0,
    };
    const {
        onSubmit,
        onCancel,
        pending,
        isSuccess,
        message,
        fetchUserData,
        data,
        fieldsValidity,
        fieldsErrorMessage,
    } = props;
    const [state, setState] = useState(formState);
    const classes = useStyle();
    const {
        name,
        phoneNumber,
        email,
        displayName,
        password,
        verification,
        newPassword,
    } = state;
    const onChangeHandler = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value,
        });
    };
    const onSubmitHandler = async () => {
        onSubmit({
            name,
            phoneNumber,
            email,
            displayName,
            password,
            verification,
            newPassword,
        });
    };
    useEffect(() => {
        fetchUserData();
    }, []);
    useEffect(() => {
        if (data && state.count === 0) {
            const { phone, email, displayName, username } = JSON.parse(data);
            setState({
                ...state,
                name: username,
                phoneNumber: phone,
                email,
                displayName,
                count: 1,
            });
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Field>
                    <DisableTextField
                        className={`${classes.autoComplete} ${classes.customTextField}`}
                        label="Username"
                        InputProps={{
                            readOnly: true,
                        }}
                        value={name}
                    />
                </Field>
                <Field>
                    <CustomTextField
                        name="displayName"
                        type="text"
                        label="Display Name"
                        className={classes.autoComplete}
                        onChange={onChangeHandler}
                        value={displayName}
                        isError={!fieldsValidity['displayName']}
                    />
                    {fieldsValidity['displayName'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['displayName']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <CustomTextField
                        name="phoneNumber"
                        type="number"
                        label="Contact No."
                        className={classes.autoComplete}
                        onChange={onChangeHandler}
                        value={phoneNumber}
                        isError={!fieldsValidity['phoneNumber']}
                    />
                    {fieldsValidity['phoneNumber'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['phoneNumber']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <CustomTextField
                        name="email"
                        type="email"
                        label="Email"
                        className={classes.autoComplete}
                        onChange={onChangeHandler}
                        value={email}
                        isError={!fieldsValidity['email']}
                    />
                    {fieldsValidity['email'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['email']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <CustomTextField
                        name="newPassword"
                        type="password"
                        label="New Password"
                        className={classes.autoComplete}
                        onChange={onChangeHandler}
                        value={newPassword}
                        isError={!fieldsValidity['newPassword']}
                    />
                    {fieldsValidity['newPassword'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['newPassword']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <CustomTextField
                        name="password"
                        type="password"
                        label="Password"
                        required
                        className={classes.autoComplete}
                        onChange={onChangeHandler}
                        value={password}
                        isError={!fieldsValidity['password']}
                        require
                    />
                    {fieldsValidity['password'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['password']}
                        </ModalSpan>
                    )}
                </Field>
                <Field>
                    <CustomTextField
                        name="verification"
                        type="password"
                        label="Password Verification"
                        required
                        className={classes.autoComplete}
                        onChange={onChangeHandler}
                        value={verification}
                        isError={!fieldsValidity['verification']}
                        isRequired="true"
                    />
                    {fieldsValidity['verification'] === false && (
                        <ModalSpan isValid={false}>
                            {fieldsErrorMessage['verification']}
                        </ModalSpan>
                    )}
                </Field>
                {pending && <Loader type="FULL-PAGE" />}
                {isSuccess && <Span isValid={isSuccess}>{message}</Span>}
                <Submit>
                    <Button onClick={onSubmitHandler} isSuccess>
                        Upload
                    </Button>
                    <Button onClick={onCancel} isSuccess={false}>
                        <StyledLink to="/">Cancel</StyledLink>
                    </Button>
                </Submit>
            </Wrapper>
        </ThemeProvider>
    );
};

Profile.propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    pending: PropTypes.bool,
    isSuccess: PropTypes.bool,
    message: PropTypes.string,
    fetchUserData: PropTypes.func,
    data: PropTypes.object,
    fieldsValidity: PropTypes.objectOf(PropTypes.bool),
    fieldsErrorMessage: PropTypes.objectOf(PropTypes.string),
};

Profile.defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
    pending: false,
    isSuccess: false,
    message: '',
    data: undefined,
    fieldsValidity: {},
    fieldsErrorMessage: {},
};

const mapStateToProps = (state) => ({ ...state.userReducer });
const mapDispatchToProps = (dispatch) => ({
    fetchUserData: () => dispatch(action.fetchUserData()),
    onDismissModal: () => dispatch(action.dismissMessage()),
    onCancel: () => dispatch(action.cancel()),
    onSubmit: (payload) => dispatch(action.updateProfile(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
