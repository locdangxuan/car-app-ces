import Color from 'config/constants/Colors';

const styles = () => ({
    contentCarWrapper: {
        padding: '0 40px',
    },
    content: {
        margin: '10px 0',
        background: Color.backgroundDetails,
        maxWidth: '32%',
    },
    layoutWrapper: {
        justifyContent: 'space-around',
    },
    paginationBar: {
        backgroundColor: Color.white,
    },
});

export default styles;
