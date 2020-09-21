/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import { Form } from 'components/common';
import action from 'redux/actions/Action.Post';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const UpdatePost = (props) => {
    const { onSubmit, onCancel } = props;
    const { id } = props.match.params;
    const onSubmitHandler = (payload) => {
        onSubmit({ ...payload, id });
    };
    const onCancelHandler = () => {
        onCancel();
        window.history.back();
    };
    return (
        <Form
            type="UPDATE"
            id={id}
            onSubmit={onSubmitHandler}
            onCancel={onCancelHandler}
        />
    );
};
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (payload) => dispatch(action.update(payload)),
    onCancel: () => dispatch(action.cancelUpdate()),
});
UpdatePost.propTypes = {
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
};
UpdatePost.defaultProps = {
    onSubmit: {},
    onCancel: {},
};
export default connect(null, mapDispatchToProps)(UpdatePost);
