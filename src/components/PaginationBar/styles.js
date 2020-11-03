import Color from 'config/constants/Colors';

const styles = (theme) => ({
    root: {
        '& > *': {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(3),
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
export default styles;
