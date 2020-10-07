/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Review, TextEditor, Loader, Modal } from 'components/common';
import action from 'redux/actions/Action.Post';
import { withStyles } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { modal } from 'config/constants/Utils';
import { Wrapper, PaginattionWrapper, styles } from './styles';

const ReviewsLayout = (props) => {
    const {
        reviewList,
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
    } = props;
    const [alertState, setAlertState] = useState(false);
    const onChangeHandler = (event, value) => {
        fetchReviews(id, value);
    };
    useEffect(() => {
        if (id) fetchReviews(id);
    }, []);
    useEffect(() => {
        if (message !== '' && alertState === false) setAlertState(true);
    });
    const onSubmitHandler = (content) => {
        createReview(id, content);
    };
    const onAlertToggle = () => {
        onDismissModal();
        setAlertState(false);
        if (isSuccess) fetchReviews(id);
    };
    const onDeleteHandler = (reviewId) => {
        deleteReView(reviewId);
    };
    return (
        <Wrapper>
            {pending && <Loader type="FULL-PAGE" />}
            {alertState && (
                <Modal
                    type={modal.type.alert}
                    alertMessage={message}
                    isSuccess={isSuccess}
                    handlerToggle={onAlertToggle}
                />
            )}
            <TextEditor onSubmit={onSubmitHandler} />
            {reviewList &&
                reviewList.map((review) => (
                    <Review
                        id={review.id}
                        editable={review.editable}
                        onDelete={onDeleteHandler}
                        name={review.user}
                        content={review.name}
                        date={review.createdAt}
                    />
                ))}
            <PaginattionWrapper>
                <Pagination
                    className={classes.root}
                    count={pagination && pagination.lastPage}
                    defaultPage={1}
                    color="primary"
                    onChange={onChangeHandler}
                />
            </PaginattionWrapper>
        </Wrapper>
    );
};
const mapStateToProps = (state) => ({
    ...state.postReducer,
});
const mapDispatchToProps = (dispatch) => ({
    fetchReviews: (id = 5, page = 1) => dispatch(action.loadReviews(id, page)),
    createReview: (id, content) => dispatch(action.createReview(id, content)),
    onDismissModal: () => dispatch(action.dismissMessage()),
    deleteReView: (id) => dispatch(action.deleteReview(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ReviewsLayout));
