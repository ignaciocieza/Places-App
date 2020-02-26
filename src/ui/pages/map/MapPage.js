import React, { useState, useEffect } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import { setSaveButtonValue } from '../../../api/actions/indexActions';
import styles from './mapPage.styles';

const MapPage = ({ navigation, route }) => {
    const { saveButtonValue } = useSelector(store => store.places);
    const dispatch = useDispatch();
    const readOnly = route.params && route.params.readOnly;
    const initialLocation = route.params && route.params.initialLocation;
    const [selectedLocation, setSelectedLocation] = useState(initialLocation);
    let markerCoordinates;

    useEffect(() => {

        if (saveButtonValue) {
            dispatch(setSaveButtonValue(false));

            if (selectedLocation) {
                navigation.navigate('NewPlace', {
                    pickedLocation: selectedLocation
                });
            }
        }
    }, [saveButtonValue]);

    const mapRegion = {
        latitude: initialLocation ? initialLocation.lat : 37.78,
        longitude: initialLocation ? initialLocation.lng : -122.43,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    const onSelectLocation = (e) => {
        if (!readOnly) {
            setSelectedLocation({
                lat: e.nativeEvent.coordinate.latitude,
                lng: e.nativeEvent.coordinate.longitude
            });
        }
    }

    if (selectedLocation) {
        markerCoordinates = {
            latitude: selectedLocation.lat,
            longitude: selectedLocation.lng
        }
    }

    return (
        <MapView region={mapRegion} style={styles.map} onPress={onSelectLocation} >
            {markerCoordinates && <Marker title='Picked Location' coordinate={markerCoordinates} ></Marker>}
        </MapView>
    )
}

export default MapPage;