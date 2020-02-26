import React from 'react';
import { View, Text, ScrollView, Image, } from 'react-native';
import { useSelector } from 'react-redux';
import MapPreview from '../../widgets/map-preview/MapPreview';
import styles from './placeDetailPage.styles';

const PlaceDetailPage = ({ route, navigation }) => {
    //placeId viene de PlaceItem.js
    const { placeId } = route.params;
    const { image, address, lat, lng } = useSelector(store => store.places.places.find((place) => place.id === placeId));

    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.locationContainer}>
                <View style={styles.addressContainer}>
                    <Text style={styles.address}>{address}</Text>
                </View>
                <MapPreview
                    style={styles.mapPreview}
                    location={lat, lng}
                    onPress={() => navigation.navigate('Map', {
                        readOnly: true,
                        initialLocation: { lat, lng }
                    })}
                />
            </View>
        </ScrollView>
    )
}

export default PlaceDetailPage;