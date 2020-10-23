const MESSAGE_ERROR = {
    LOAD_BRANDS_FAILURE:
        'Can not load brands from server, please reload the page',
    LOAD_MODELS_FAILURE:
        'Can not load models from server, please reload the page',
    FETCH_DATA_FAILURE:
        'Can not get information of the post from server, please reload the page',
    EMPTY_MODELS:
        'Sorry!There are no models from this brand in our store at this moment',
    LOAD_REVIEWS_FAILURE:
        'Can not load reviews from server, please reload the page',
    INVALID_DISTANCE_TRAVELED: 'Distance traveled must be a number',
    INVALID_PRICE: 'Price must be a number',
    INVALID_BRAND: 'Please select a brand',
    INVALID_MODEL: 'Please select a model',
    INVALID_NAME: 'The name of the car must not contain any special characters',
    INVALID_YEAR: 'Please select a year',
    INVALID_FUEL_TYPE: 'Please select a fuel type',
    INVALID_FIELDS: 'Please double check all the fields',
    EMPTY_INFORMATION: 'Please type at least one information',
    EMPTY_IMAGES: 'Please select at least one image',
    EMPTY_FIELD: 'Please fill in the field above',
    NEGATIVE_DISTANCE_TRAVELED: 'Distance traveled must be at least 100km',
    NEGATIVE_PRICE: 'Distance traveled must be at least 100 USD',
};
const MESSAGE_SUCCESS = {
    LOAD_BRANDS_SUCCESS: 'Successfully loaded brands',
    LOAD_MODELS_SUCCESS: 'Successfully loaded models',
    FETCH_DATA_SUCCESS: 'Successfully fetched data from server',
    LOAD_REVIEWS_SUCCESS: 'Success fully loaded reviews from server',
};
export { MESSAGE_ERROR, MESSAGE_SUCCESS };
