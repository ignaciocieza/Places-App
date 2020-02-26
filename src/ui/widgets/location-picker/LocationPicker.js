import React, { useState, useEffect } from 'react';
import { View, Button, Text, ActivityIndicator, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapPreview from '../map-preview/MapPreview';
import verifyPermissions from '../verifyPermissions';
import { colors } from '../../../constants';
import styles from './locationPicker.styles';

const LocationPicker = ({ navigation, route, onLocationPicked }) => {
    const [pickedLocation, setPickedLocation] = useState();
    const [isFetching, setIsFetching] = useState(false);
    const mapPickedLocation = route.params && route.params.pickedLocation; //from "MapPage"

    useEffect(() => {
        if (mapPickedLocation) {
            setPickedLocation(mapPickedLocation);
            onLocationPicked(mapPickedLocation);
        }
    }, [mapPickedLocation]);


    const onGetLocation = async () => {
        const hasPermission = await verifyPermissions('LOCATION');

        if (!hasPermission) {
            return;
        }
        try {
            setIsFetching(true);
            //no funciona en emulador, solo en dispositivo
            const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
            setPickedLocation({
                lat: location.coords.latitude,
                lng: location.coords.longitude,
            });
        } catch (err) {
            Alert.alert('Could not fetch location', 'Please try later or pick a location on the map.', [{ text: 'Ok' }]);
            console.log(err);
        }
        setIsFetching(false);
    };

    const onPickMap = () => {
        navigation.navigate('Map');
    }

    return (
        <View style={styles.locationPicker}>
            <MapPreview style={styles.mapPreview} location={pickedLocation} onPress={onPickMap}>
                {isFetching ? (
                    <ActivityIndicator size={'large'} color={colors.primary} />
                ) : (
                        <Text>No Location Chosen Yet!</Text>
                    )}
            </MapPreview>
            <View style={styles.actions}>
                <Button title='My Location' color={colors.primary} onPress={onGetLocation} />
                <Button title='Pick on Map' color={colors.primary} onPress={onPickMap} />
            </View>
        </View>
    )
}

export default LocationPicker;