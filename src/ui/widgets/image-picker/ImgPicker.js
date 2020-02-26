import React, { useState } from 'react';
import { View, Button, Text, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import verifyPermissions from '../../widgets/verifyPermissions';
import { colors } from '../../../constants';
import styles from './imgPicker.styles';

const ImgPicker = ({onImageTake}) => {
    const [pickedImage, setpickedImage] = useState();

    const onTakeImage = async () => {
        let image;
        const hasPermition = await verifyPermissions('CAMERA');

        if (!hasPermition) {
            return;
        }

        image = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 0.5
        });

        setpickedImage(image.uri);
        onImageTake(image.uri)
    }

    return (
        <View style={styles.imagePicker}>
            <View style={styles.imagePreview}>
                {!pickedImage ? <Text>No Image Picked Yet</Text> : <Image style={styles.image} source={{ uri: pickedImage }} />}
            </View>
            <Button title='Take Image' color={colors.primary} onPress={onTakeImage} />
        </View>
    )
}

export default ImgPicker;