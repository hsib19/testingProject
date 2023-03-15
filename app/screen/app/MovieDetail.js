import { useTheme } from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

export default MovieDetail = ({ navigation, route }) => {

    const { theme } = useTheme();

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background
            }}
        >

        <Text>Movie Detail </Text>

        </View>
    );
}