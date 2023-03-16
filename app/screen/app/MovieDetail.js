import { Text, useTheme, Divider, Icon, Skeleton } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import {View, ScrollView, StatusBar, TouchableWithoutFeedback, Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { RFPercentage } from 'react-native-responsive-fontsize';

const { width, height } = Dimensions.get("screen");

export default MovieDetail = ({ navigation, route }) => {

    const [loading, setLoading] = useState(true);

    const { theme } = useTheme();

    useEffect(() => {
      getData();
    }, []);

    const getData = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };


    return (
      <>
        <StatusBar translucent backgroundColor={'transparent'} />

        <ScrollView
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
          }}>
          <View
            style={{
              position: 'absolute',
              top: 50,
              left: 20,
              zIndex: 9999,
              width: '100%',
              alignItems: 'flex-start',
            }}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: 50,
                }}>
                <Icon
                  name="arrow-left"
                  type="feather"
                  color={theme.colors.white}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View>
            {loading ? (
              <Skeleton
                style={{
                  height: height * 0.6,
                }}
              />
            ) : (
              <AutoHeightImage
                source={{
                  uri: 'https://image.tmdb.org/t/p/w300/n9YWVQRc0zw0nwrFcOkOpffZxjc.jpg',
                }}
                width={width}
                style={{
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                }}
              />
            )}
          </View>

          <View
            style={{
              padding: 20,
            }}>
            {loading ? (
              <Skeleton width={'70%'} />
            ) : (
              <Text bold style={{fontSize: RFPercentage(3)}}>
                Title Movie Here
              </Text>
            )}
            {loading ? (
              <Skeleton width={'50%'} style={{marginVertical: 10}} />
            ) : (
              <Text style={{marginTop: 10, marginBottom: 5}}>
                Title Movie Here
              </Text>
            )}
            {loading ? (
              <Skeleton width={'40%'} />
            ) : (
              <Text>Genre, Other Genre</Text>
            )}

            <Divider color={theme.colors.white} style={{marginVertical: 20}} />

            {loading ? (
              <View>
                <Skeleton width={'90%'} style={{marginBottom: 8}} />
                <Skeleton width={'80%'} style={{marginBottom: 8}} />
                <Skeleton width={'60%'} style={{marginBottom: 8}} />
                <Skeleton width={'70%'} style={{marginBottom: 8}} />
                <Skeleton width={'40%'} style={{marginBottom: 8}} />
              </View>
            ) : (
              <Text>Description</Text>
            )}
          </View>
        </ScrollView>
      </>
    );
}