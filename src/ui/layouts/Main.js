import React from 'react';
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListPage from '../pages/places-list/PlacesListPage';
import PlaceDetailPage from '../pages/place-detail/PlaceDetailPage';
import MapPage from '../pages/map/MapPage';
import NewPlacePage from '../pages/new-place/NewPlacePage';
import CustomHeaderButton from '../widgets/CustomHeaderButton';
import { colors } from '../../constants';


const Main = () => {
    const Stack = createStackNavigator();
    const isAndroid = Platform.OS === 'android';

    const defaultScreenOptions = {
        headerStyle: {
            backgroundColor: isAndroid ? colors.primary : ''
        },
        headerTintColor: isAndroid ? colors.white : colors.primary,
    }

    const createStack = () => (
        <Stack.Navigator screenOptions={defaultScreenOptions}>
            <Stack.Screen
                name='Places'
                component={PlacesListPage}
                options={{
                    headerTitle: 'All Places',
                    headerRight: () => (
                        <CustomHeaderButton
                            navigateTo='NewPlace'
                            iconName={isAndroid ? 'md-add' : 'ios-add'}
                            iconSize={23}
                            iconColor={isAndroid ? colors.white : colors.primary}
                            iconOtherStyles={{ marginRight: 20 }}
                        />
                    )
                }} />
            <Stack.Screen
                name='PlacesDetail'
                component={PlaceDetailPage}
                options={(props) => ({
                    headerTitle: props.route.params.placeTitle
                })}
            />
            <Stack.Screen
                name='Map'
                component={MapPage}
                options={(props) => ({
                    headerTitle: () => {
                        if (props.route.params) {
                            if (props.route.params.readOnly) { return; }
                            return <Text style={{ color: isAndroid ? colors.white : colors.primary, fontSize: 20 }}>Add Place</Text>;
                        } else {
                            return <Text style={{ color: isAndroid ? colors.white : colors.primary, fontSize: 20 }}>Add Place</Text>;
                        }
                    },
                    headerRight: () => {
                        if (props.route.params) {
                            if (props.route.params.readOnly) { return; }
                        }
                        return (
                            <CustomHeaderButton
                                text={'Save'}
                                touchableOpacityStyle={{ marginHorizontal: 20 }}
                                textStyle={{ fontSize: 16, color: isAndroid ? colors.white : colors.primary }}
                                touchableOpacityOnPress={true}
                            />
                        )
                    }
                })}
            />
            <Stack.Screen
                name='NewPlace'
                component={NewPlacePage}
                options={{
                    headerTitle: 'Add Place',
                }}
            />
        </Stack.Navigator>
    )

    return (
        <NavigationContainer>
            {createStack()}
        </NavigationContainer>
    );

}

export default Main;