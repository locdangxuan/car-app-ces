import React from 'react';
import action from 'redux/actions/Action.Post';
import { Form } from 'components/common';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PostCreating = (props) => {
    const { onSubmitCreatingPost, onCancelCreatingPost } = props;
    const onSubmitHandler = (payload) => {
        onSubmitCreatingPost(payload);
    };
    const onCancelHandler = () => {
        onCancelCreatingPost();
        window.history.pushState({}, 'detail', '/');
        window.history.go();
    };
    return <Form onSubmit={onSubmitHandler} onCancel={onCancelHandler} />;
};

const mapStateToProps = (state) => ({ ...state.postReducer });
const mapDispatchToProps = (dispatch) => ({
    onSubmitCreatingPost: (payload) => {
        dispatch(action.upload(payload));
    },
    onCancelCreatingPost: () => {
        dispatch(action.cancelUpload());
    },
});

PostCreating.propTypes = {
    onSubmitCreatingPost: PropTypes.func,
    onCancelCreatingPost: PropTypes.func,
};

PostCreating.defaultProps = {
    onSubmitCreatingPost: () => {},
    onCancelCreatingPost: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(PostCreating);
