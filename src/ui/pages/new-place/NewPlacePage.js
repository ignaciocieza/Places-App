import React, { useState } from 'react';
import { View, Text, Button, ScrollView, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addPlace } from '../../../api/actions/indexActions';
import ImgPicker from '../../widgets/image-picker/ImgPicker';
import LocationPicker from '../../widgets/location-picker/LocationPicker';
import { colors } from '../../../constants';
import styles from './newPlacePage.styles';

const NewPlacePage = props => {
    const dispatch = useDispatch();
    const [titleValue, setTitleValue] = useState('');
    const [selectedImage, setSelectedImage] = useState('');
    const [locationPicked, setlocationPicked] = useState('');

    const onTitleChange = text => {
        setTitleValue(text);
    };

    const onLocationUpLift = (location) => {
        setlocationPicked(location);
    };

    const onSavePlace = () => {
        if (locationPicked && selectedImage && titleValue ) {
            dispatch(addPlace(titleValue, selectedImage, locationPicked));
            props.navigation.goBack();
        }else{
            Alert.alert('Complete the fields, to go on!', 'Push "ok" and complete all the fields', [{text: 'OK'}])
        }
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput style={styles.textInput} onChangeText={(e) => onTitleChange(e)} value={titleValue} />
                <ImgPicker onImageTake={(img) => setSelectedImage(img)} />
                <LocationPicker {...props} onLocationPicked={onLocationUpLift} />
                <Button title='Save Place' color={colors.primary} onPress={onSavePlace} />
            </View>
        </ScrollView>
    );
};

export default NewPlacePage;