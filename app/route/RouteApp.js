import React from 'react';
import {StatusBar} from 'react-native';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen

import HomeScreen from '../screen/app/HomeScreen';
import MovieDetail from '../screen/app/MovieDetail';
import { useTheme } from '@rneui/themed';

const Stack = createNativeStackNavigator();

function RouteApp() {

    const { theme } = useTheme();

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.background}
      />
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerTintColor: theme.colors.white,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MovieDetail" component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteApp;
