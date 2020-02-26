import { StyleSheet } from 'react-native';
import { colors } from '../../../constants';

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: colors.secundary,
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: colors.secundary,
        borderColor: colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    title: {
        color: colors.black,
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        marginRight: 15,
        color: colors.tertiary,
        fontSize: 16,
    }
})

export default styles;