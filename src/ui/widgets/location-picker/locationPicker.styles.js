import {StyleSheet} from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
    locationPicker:{
        marginBottom:15,
    },
    mapPreview: {
        marginBottom: 10,
        width: '100%',
        height: 150,
        borderColor: colors.secundary,
        borderWidth: 1,
    },
    actions:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
    
})

export default styles;