import { Button, useTheme } from '@rneui/themed';
import React from 'react';
import {View, Text} from 'react-native';

export default HomeScreen = ({ navigation }) => {

    const { theme } = useTheme();

    return(
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background
            }}
        >

        <Button 
            title="Movie Detail"
            onPress={() => navigation.navigate('MovieDetail', { movieId: 123 }) }
        />

        </View>
    );
}