/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import action from 'redux/actions/Action.Post';
import PropTypes from 'prop-types';
import utils from 'utils/utils';
import Wrapper from './styles';

const LocationPicker = (props) => {
    const { onLocationChangeHandler, defaultLocation } = props;
    let defaultLat = 16.054745932122085;
    let defaultLng = 108.2209027359643;
    if (defaultLocation) {
        defaultLat = JSON.parse(defaultLocation).coor.lat;
        defaultLng = JSON.parse(defaultLocation).coor.lng;
    }
    let marker;
    useEffect(() => {
        const map = utils.mapInit({ lat: defaultLat, lng: defaultLng });
        marker = utils.marketInit({ lat: defaultLat, lng: defaultLng });
        marker.addTo(map).bindPopup('Danang, Vietnam');
        map.on('dblclick', async (event) => {
            if (marker) map.removeLayer(marker);
            const { lat, lng } = event.latlng;
            onLocationChangeHandler({ lat, lng });
            marker = utils.marketInit({ lat, lng });
            marker.addTo(map);
        });
    }, []);
    return <Wrapper id="map" />;
};

LocationPicker.propTypes = {
    onLocationChangeHandler: PropTypes.func,
    defaultLocation: PropTypes.string,
};

LocationPicker.defaultProps = {
    onLocationChangeHandler: () => {},
    defaultLocation: '',
};

const mapDispatchToProps = (dispatch) => ({
    onLocationChangeHandler: (coordinates) =>
        dispatch(action.onLocationChange(coordinates)),
});

export default connect(null, mapDispatchToProps)(LocationPicker);
