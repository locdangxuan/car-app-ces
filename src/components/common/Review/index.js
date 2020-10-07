/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Span, Textarea, Button, Image, Modal } from 'components/common';
import { ThemeProvider } from 'styled-components';
import utils from 'utils/utils';
import Delete from 'assets/images/trash_white.png';
import { modal } from 'config/constants/Utils';
import { Wrapper, TitleWrapper, ContentWrapper, theme } from './styles';

const Review = (props) => {
    const { name, content, date, editable, id, onDelete } = props;
    const [showmore, setShowMoreStatus] = useState(false);
    const [alertState, setAlertState] = useState(false);
    const onClickHandler = () => {
        setShowMoreStatus(!showmore);
    };
    const onRemoveHandler = () => {
        setAlertState(true);
    };
    const onAlertHandler = (signal = false) => {
        if (signal) onDelete(id);
        setAlertState(false);
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                {name && content && (
                    <Wrapper>
                        <ContentWrapper>
                            <TitleWrapper>
                                <ThemeProvider theme={theme.bigSpan}>
                                    <Span>{name}</Span>
                                </ThemeProvider>
                                <Span>
                                    &nbsp;- &nbsp;{utils.timestampZToDate(date)}
                                </Span>
                            </TitleWrapper>
                            <Textarea
                                value={content}
                                disabled
                                heightToggle={showmore ? '100px' : '60'}
                            >
                                {content}
                            </Textarea>
                            {content.length > 100 && (
                                <Span onClick={onClickHandler}>
                                    {!showmore ? 'Show more' : 'Hide'}
                                </Span>
                            )}
                        </ContentWrapper>
                        {editable && (
                            <Button onClick={onRemoveHandler}>
                                <Image src={Delete} alt="X" />
                            </Button>
                        )}
                    </Wrapper>
                )}
            </ThemeProvider>
            {alertState && (
                <Modal
                    type={modal.type.alert}
                    alertMessage="Are you sure to delete this review"
                    warningType
                    isSuccess={false}
                    onSubmit={onAlertHandler}
                    handlerToggle={onAlertHandler}
                />
            )}
        </div>
    );
};

export default Review;
