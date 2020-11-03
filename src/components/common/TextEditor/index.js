/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Textarea, Button } from 'components/common';
import { ThemeProvider } from 'styled-components';
import { Wrapper, theme } from './styles';

const TextEditor = (props) => {
    const { onSubmit } = props;
    const [content, setContent] = useState('');
    const [isClickable, setClickable] = useState(false);
    const onChangeHandler = (event) => {
        setContent(event.target.value);
    };
    const onSubmitHandler = () => {
        onSubmit(content);
        setContent('');
    };
    useEffect(() => {
        if (content !== '' && !isClickable) {
            setClickable(true);
        } else if (content === '' && isClickable) {
            setClickable(false);
        }
    }, [content, isClickable]);
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Textarea onChange={onChangeHandler} value={content} />
                <Button onClick={onSubmitHandler} disabled={!isClickable}>
                    Submit
                </Button>
            </Wrapper>
        </ThemeProvider>
    );
};

export default TextEditor;
