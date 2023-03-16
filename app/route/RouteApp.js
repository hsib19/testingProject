import React, { useEffect } from 'react';
import {ActivityIndicator, StatusBar, View} from 'react-native';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screen

import HomeScreen from '../screen/app/HomeScreen';
import MovieDetail from '../screen/app/MovieDetail';
import { Avatar, Text, useTheme } from '@rneui/themed';
import { useDispatch, useSelector } from 'react-redux';
import { authData } from '../redux/actions/Acccount';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Stack = createNativeStackNavigator();

const LoadingScreen = () => {
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color={"#fff"} />
        </View>
    )
}

const AuthScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text bold style={{ fontSize: RFPercentage(4) }}>404 Not Found</Text>
    </View>
  );
};

function RouteApp() {

    const { theme } = useTheme();
    const dispatch = useDispatch();

    const dataAccount = useSelector(tsate => tsate.dataAccount);

    useEffect(() => {
        dispatch(authData());
    }, [])

  return (
    <NavigationContainer theme={DarkTheme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={theme.colors.background}
        translucent
      />
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerTintColor: theme.colors.white,
          headerStyle: {
            backgroundColor: theme.colors.background,
          },
        }}>
        {dataAccount.loading ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="LoadingScreen"
            component={LoadingScreen}
          />
        ) : dataAccount.error !== '' ? (
          <Stack.Screen
            options={{headerShown: false}}
            name="AuthScreen"
            component={AuthScreen}
          />
        ) : (
          <Stack.Group>
            <Stack.Screen
              options={{
                headerLeft: () => (
                  <Avatar
                    title={dataAccount.data.name[0]}
                    rounded
                    containerStyle={{
                      backgroundColor: theme.colors.grey0,
                      marginRight: 10,
                    }}
                  />
                ),
                title: dataAccount.data.name,
                headerTitleStyle: {
                  fontFamily: 'Lato-Bold',
                },
              }}
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="MovieDetail"
              component={MovieDetail}
            />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouteApp;
