import React from 'react';
import action from 'redux/actions/Action.Post';
import { Form } from 'components/common';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const CreatePost = (props) => {
    const { onSubmitCreatingPost } = props;
    const onSubmitHandler = (payload) => {
        onSubmitCreatingPost(payload);
    };
    const onCancelHandler = () => {
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
});

CreatePost.propTypes = {
    onSubmitCreatingPost: PropTypes.func,
};

CreatePost.defaultProps = {
    onSubmitCreatingPost: () => {},
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
