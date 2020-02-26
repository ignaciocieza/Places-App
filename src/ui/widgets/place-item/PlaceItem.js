import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './placeItem.styles';

const PlaceItem = ({ title, id, image, address }) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.placeItem}
            onPress={() => {
                navigation.navigate('PlacesDetail', {
                    // placeTitle: title,
                    placeId: id
                })
            }}
        >
            <Image style={styles.image} source={{ uri: image }} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PlaceItem;