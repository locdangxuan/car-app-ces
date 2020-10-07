/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Textarea, Button } from 'components/common';
import { ThemeProvider } from 'styled-components';
import { Wrapper, theme } from './styles';

const TextEditor = (props) => {
    const { onSubmit } = props;
    const [content, setContent] = useState('');
    const onChangeHandler = (event) => {
        setContent(event.target.value);
    };
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Textarea onChange={onChangeHandler} value={content} />
                <Button onClick={() => onSubmit(content)}>Submit</Button>
            </Wrapper>
        </ThemeProvider>
    );
};

export default TextEditor;