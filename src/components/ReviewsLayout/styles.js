/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import Color from 'config/constants/Colors';

export const Wrapper = styled.div`
    background-color: ${(props) => props.backgroundColor};
    padding: 1vh;
`;
export const PaginattionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    bottom: 0;
`;

export const styles = (theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
            display: 'flex',
            justifyContent: 'center',
        },
        '& ul': {
            '& li': {
                '& button': {
                    background: Color.white,
                    '&:selected': {
                        color: Color.white,
                    },
                    '&:hover': {
                        background: Color.grey,
                        color: Color.white,
                    },
                },
            },
        },
    },
});
