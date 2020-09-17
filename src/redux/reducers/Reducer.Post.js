import { MODELS, BRANDS, POSTS } from 'config/constants/Action.Types';

const initState = {
    models: [],
    brands: [],
    isSuccess: false,
    message: '',
    pending: false,
    images: [],
    data: undefined,
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case POSTS.REQUEST:
            return {
                ...state,
                pending: true,
            };
        case POSTS.UPLOAD_SUCCEED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: true,
            };
        case POSTS.UPLOAD_FAILED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: false,
            };
        case BRANDS.REQUEST:
            return {
                ...initState,
                ...state,
                pending: true,
            };
        case BRANDS.LOAD_BRAND_SUCCEED:
            return {
                ...state,
                pending: false,
                brands: action.brands,
            };
        case BRANDS.LOAD_BRAND_FAILED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: false,
            };
        case MODELS.REQUEST:
            return {
                ...state,
                pending: true,
                message: '',
                isSuccess: false,
            };
        case MODELS.LOAD_MODEL_SUCCEED:
            return {
                ...state,
                pending: false,
                models: action.models,
            };
        case MODELS.LOAD_MODEL_FAILED:
            return {
                ...state,
                pending: false,
                models: [],
                message: action.message,
                isSuccess: false,
            };
        case POSTS.FETCH_DATA_FAILED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: false,
            };
        case POSTS.FETCH_DATA_SUCCEED:
            return {
                ...state,
                pending: false,
                data: action.data,
            };
        case POSTS.UPDATE_FAILED:
            return {
                ...state,
                pending: false,
                message: action.message,
            };
        case POSTS.UPDATE_SUCCEED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: true,
            };
        case POSTS.DISMISS_MESSAGE:
            return {
                ...state,
                message: '',
            };
        default:
            return { ...state };
    }
};

export default postReducer;
