import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { setSaveButtonValue } from '../../api/actions/indexActions';

const CustomHeaderButton = ({ iconName, iconSize, iconColor, navigateTo, iconOtherStyles, text, textStyle, touchableOpacityStyle, touchableOpacityOnPress }) => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    return (
        <TouchableOpacity
            onPress={() => {
                navigateTo && navigation.navigate(navigateTo);
                touchableOpacityOnPress && dispatch(setSaveButtonValue(touchableOpacityOnPress));
            }}
            style={touchableOpacityStyle}
        >
            <View style={iconOtherStyles}>
                {text ? (
                    <Text style={textStyle}>{text}</Text>
                ) : (
                        <Ionicons
                            name={iconName}
                            size={iconSize}
                            color={iconColor}
                        />
                    )
                }
            </View>
        </TouchableOpacity>
    );
}

export default CustomHeaderButton;