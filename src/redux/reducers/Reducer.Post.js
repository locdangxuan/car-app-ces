const initState = {
    name: '',
    models: [],
    yearOfPublish: '',
    fuelType: '',
    distanceTraveled: 0,
    images: [],
};

const postReducer = (state = initState, action) => {
    switch (action.type) {
        case 'UPDATE_FIELD_POST':
            return { ...state, [action.key]: action.value };
        default:
            return { ...state };
    }
};

export default postReducer;
