import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import ENV from '../../../../env';
import styles from './mapPreview.styles';

const MapPreview = ({location, style, onPress, children }) => {
    let imagePreviewUrl;

    if (location) {
        imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${location.lat},${location.lng}&key=${ENV.googleApiKey}`;
    }
    return (
        <TouchableOpacity style={{ ...styles.mapPreview, ...style }} onPress={onPress}>
            {location ?<Image style={styles.mapImage} source={{ uri: imagePreviewUrl }} /> : children}
        </TouchableOpacity>
    )
}

export default MapPreview;
