/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Review, TextEditor, Loader, Modal } from 'components/common';
import action from 'redux/actions/Action.Post';
import authAction from 'redux/actions/Action.Auth';
import PropTypes from 'prop-types';
import { Typography, withStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { modal } from 'config/constants/Utils';
import component from 'config/constants/Components';
import variant from 'config/constants/Variant';
import Color from 'config/constants/Colors';
import { Wrapper, PaginattionWrapper, styles } from './styles';

const ReviewsLayout = (props) => {
    const {
        reviewsList,
        pagination,
        fetchReviews,
        id,
        createReview,
        deleteReView,
        pending,
        message,
        isSuccess,
        onDismissModal,
        classes,
        isLogginSucceed,
        verifyAuthenticationStatus,
    } = props;
    const [alertState, setAlertState] = useState(false);
    const onChangeHandler = (event, value) => {
        fetchReviews(id, value);
    };
    useEffect(() => {
        verifyAuthenticationStatus();
        if (id) fetchReviews(id);
    }, []);
    useEffect(() => {
        if (message !== '' && !(alertState || isSuccess)) setAlertState(true);
    });
    const onSubmitHandler = (content) => {
        if (content !== '') {
            createReview(id, content);
        }
    };
    const onAlertToggle = () => {
        onDismissModal();
        setAlertState(false);
    };
    const onDeleteHandler = (reviewId) => {
        deleteReView(reviewId, id);
    };
    return (
        <Wrapper>
            {pending && <Loader type="SingleComp" />}
            {alertState && (
                <Modal
                    type={modal.type.alert}
                    alertMessage={message}
                    isSuccess={isSuccess}
                    handlerToggle={onAlertToggle}
                />
            )}
            {isLogginSucceed === true ? (
                <TextEditor onSubmit={onSubmitHandler} />
            ) : (
                <Typography
                    component={component.h4}
                    variant={variant.h4}
                    className={classes.unAuthenticated}
                >
                    Please login to review this car
                </Typography>
            )}
            {reviewsList &&
                reviewsList.map((review) => {
                    const {
                        id: reviewId,
                        editable,
                        user,
                        name,
                        createdAt,
                    } = review;
                    return (
                        <Review
                            key={reviewId}
                            id={reviewId}
                            editable={editable}
                            onDelete={onDeleteHandler}
                            name={user}
                            content={name}
                            date={createdAt}
                        />
                    );
                })}
            {pagination.total !== 0 ? (
                <PaginattionWrapper>
                    <Pagination
                        className={classes.root}
                        count={pagination && pagination.lastPage}
                        defaultPage={1}
                        color={Color.primary}
                        onChange={onChangeHandler}
                    />
                </PaginattionWrapper>
            ) : (
                <Typography
                    component={component.h6}
                    variant={variant.h6}
                    className={classes.emptyReview}
                >
                    No Review for this car
                </Typography>
            )}
        </Wrapper>
    );
};

ReviewsLayout.propTypes = {
    isLogginSucceed: PropTypes.bool,
    verifyAuthenticationStatus: PropTypes.func,
};

ReviewsLayout.defaultProps = {
    isLogginSucceed: false,
    verifyAuthenticationStatus: () => {},
};
const mapStateToProps = (state) => ({
    ...state.postReducer,
    isLogginSucceed: state.authReducer.isLogginSucceed,
});
const mapDispatchToProps = (dispatch) => ({
    fetchReviews: (id = 5, page = 1) => dispatch(action.loadReviews(id, page)),
    createReview: (id, content) => dispatch(action.createReview(id, content)),
    onDismissModal: () => dispatch(action.dismissMessage()),
    deleteReView: (id, postId) => dispatch(action.deleteReview(id, postId)),
    verifyAuthenticationStatus: () =>
        dispatch(authAction.verifyAuthenticationStatus()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ReviewsLayout));
