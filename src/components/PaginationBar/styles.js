import Color from 'config/constants/Colors';

const styles = (theme) => ({
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
                    },
                },
            },
        },
    },
});
export default styles;
