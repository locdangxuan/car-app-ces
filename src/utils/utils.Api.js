const getFormDataForPost = (payload) => {
    const data = new FormData();
    data.append('idModel', payload.model);
    data.append('name', payload.name);
    data.append('year', payload.year);
    data.append('fuelType', payload.fuelType);
    data.append('distanceTraveled', payload.distanceTraveled);
    data.append('price', payload.price);
    data.append('information', payload.information);
    Object.values(payload.images).forEach((value) => {
        data.append('images', value);
    });
    return data;
};

export default { getFormDataForPost };
