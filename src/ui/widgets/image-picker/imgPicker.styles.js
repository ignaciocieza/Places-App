import {StyleSheet} from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
    imagePicker:{
        alignItems: 'center',
        marginBottom:15,
    },
    imagePreview:{
        width:'100%',
        height: 200,
        marginBottom:10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.secundary,
        borderWidth:1
    },
    image:{
        width:'100%',
        height: '100%'
    }
})

export default styles;