/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import action from 'redux/actions/Action.Post';
import PropTypes from 'prop-types';
import utils from 'utils/utils';
import Wrapper from './styles';

const defaultLatLng = { lat: 16.054796, lng: 108.220891 };

const LocationPicker = (props) => {
    const { onLocationChangeHandler } = props;
    let marker;
    useEffect(() => {
        const map = utils.mapInit(defaultLatLng);
        marker = utils.marketInit(defaultLatLng);
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
};

LocationPicker.defaultProps = {
    onLocationChangeHandler: () => {},
};

const mapDispatchToProps = (dispatch) => ({
    onLocationChangeHandler: (coordinates) =>
        dispatch(action.onLocationChange(coordinates)),
});

export default connect(null, mapDispatchToProps)(LocationPicker);
