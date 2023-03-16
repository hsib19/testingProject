import { Text, useTheme, Divider, Icon, Skeleton, Image } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import {View, ScrollView, StatusBar, TouchableWithoutFeedback, Dimensions} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { RFPercentage } from 'react-native-responsive-fontsize';
import AppService from '../../service/AppService';
import {API_URL_IMAGES} from '@env';

const { width, height } = Dimensions.get("screen");

export default MovieDetail = ({ navigation, route }) => {

    const [loading, setLoading] = useState(true);
    const [dataMovie, setDataMovie] = useState("");

    const { theme } = useTheme();

    useEffect(() => {
      getData();
    }, []);

    const getData = async () => {
     
        try {

          const res = await AppService.get(`movie/${route.params.movieID}`);

          setDataMovie(res);
          setLoading(false);

        } catch (error) {
          setDataMovie("");
          setLoading(false);
        }

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
              <Image
                source={{
                  uri: `${API_URL_IMAGES}w500/${dataMovie.poster_path}`,
                }}
                // width={width}
                style={{
                  borderBottomLeftRadius: 15,
                  borderBottomRightRadius: 15,
                  width: width,
                  height: height * 0.6,
                }}
                loadingIndicatorSource={
                  <Skeleton
                    style={{
                      height: height * 0.6,
                    }}
                  />
                }
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
                {dataMovie.original_title}
              </Text>
            )}
            {loading ? (
              <Skeleton width={'50%'} style={{marginVertical: 10}} />
            ) : (
              <Text style={{marginTop: 10, marginBottom: 5}}>
                {dataMovie.overview}
              </Text>
            )}
            {loading ? (
              <Skeleton width={'40%'} />
            ) : (
              <Text style={{marginTop: 8}}>
                Genre : {dataMovie.genres.map((item, index) =>
                  index === dataMovie.genres.length - 1
                    ? item.name
                    : item.name + ', ',
                )}
              </Text>
            )}
          </View>
        </ScrollView>
      </>
    );
}