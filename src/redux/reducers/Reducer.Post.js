const initState = {
    name: '',
    model: '',
    yearOfPublish: '',
    fuelType: '',
    distanceTraveled: '',
    images: [],
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD_POST':
            return { ...state, [action.key]: action.value };
        case 'UPLOAD_IMAGES_POST': {
            return { ...state };
        }
        default:
            return { ...state };
    }
};

export default postReducer;
