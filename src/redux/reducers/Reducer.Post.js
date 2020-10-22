import { MODELS, BRANDS, POSTS } from 'config/constants/Action.Types';

const initState = {
    models: [],
    brands: [],
    isSuccess: false,
    message: '',
    pending: false,
    images: [],
    data: undefined,
    location: undefined,
    reviewsList: [],
    pagination: 0,
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case POSTS.REVIEWS.REQUEST:
            return {
                ...state,
                isSuccess: false,
                pending: true,
                reviewsList: [],
            };
        case POSTS.REVIEWS.FETCH_REQUEST:
            return {
                ...state,
                pending: true,
                reviewsList: [],
            };
        case POSTS.REVIEWS.LOAD_REVIEWS_SUCCEED:
            return {
                ...state,
                pending: false,
                reviewsList: action.reviewList,
                pagination: action.pagination,
            };
        case POSTS.REVIEWS.LOAD_REVIEWS_FAILED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: false,
                pagination: action.pagination,
            };
        case POSTS.REVIEWS.CREATE_REVIEW_SUCCEED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: true,
                reviewsList: action.data,
            };
        case POSTS.REVIEWS.CREATE_REVIEW_FAILED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: false,
            };
        case POSTS.REVIEWS.DELETE_REVIEW_SUCCEED:
            return {
                ...state,
                pending: false,
                message: action.message,
                isSuccess: true,
                reviewsList: action.data.list,
                pagination: action.data.pagination,
            };
        case POSTS.REVIEWS.DELETE_REVIEW_FAILED:
            return {
                ...state,
                pending: false,
                isSuccess: false,
                message: action.message,
            };
        case POSTS.REQUEST:
            return {
                ...state,
                pending: true,
                data: [],
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
        case POSTS.LOCATION:
            return {
                ...state,
                location: action.location,
            };
        case POSTS.CANCEL:
            return { ...initState };
        default:
            return { ...state };
    }
};

export default postReducer;
