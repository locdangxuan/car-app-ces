import 'dotenv/config';

const server =
    process.env.REACT_APP_API_SERVER || 'https://car-app-ces.tk/api/';

const api = {
    user: {
        register: `${server}users/register`,
        login: `${server}users/login`,
    },
    post: {
        get: `${server}posts/`,
        create: `${server}posts/create`,
        update: `${server}posts/update`,
    },
};

export default api;
