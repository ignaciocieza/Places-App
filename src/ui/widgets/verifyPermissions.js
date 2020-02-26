import { Alert } from 'react-native';
import * as Permissions from 'expo-permissions';

const verifyPermissions = async (permissionType) => {
    let response;

    switch (permissionType) {
        case 'CAMERA':
            response = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
            break;
        case 'LOCATION':
            response = await Permissions.askAsync(Permissions.LOCATION);
            break;
        default:
            response.status = 'null';
            break;
    }

    if (response.status !== 'granted') {
        Alert.alert(
            'No Permission! ',
            `You need grant ${permissionType} permission to go on`,
            [{ text: 'Ok' }]
        );
        return false;
    }
    return true;
};

export default verifyPermissions;