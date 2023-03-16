import React, { useEffect, useState } from 'react';
import { Text, useTheme } from '@rneui/themed';
import { Dimensions, StyleSheet } from 'react-native';
import {FlatList, TouchableWithoutFeedback, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import { RFPercentage } from 'react-native-responsive-fontsize';
import LoadingMovieList from '../../components/LoadingMovieList';
import AppService from '../../service/AppService';

import {API_URL_IMAGES} from '@env';

const { width } = Dimensions.get("screen");

export default HomeScreen = ({ navigation }) => {

    const { theme } = useTheme();

    const [loading, setLoading] = useState(true);
    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = async () => {

        try {

          const res = await AppService.get('movie/popular');

          setListMovie(res.results);
          setLoading(false);

        } catch (error) {
          setListMovie([]);
          setLoading(false);
        }
    }

    if (loading){
        return <LoadingMovieList />;
    }
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: theme.colors.background,
          }}>
          {listMovie.length === 0 ? (
            <View>
              <Text>Movie tidak</Text>
            </View>
          ) : (
            <FlatList
              data={listMovie}
              horizontal={false}
              keyExtractor={(_, index) => index.toString()}
              columnWrapperStyle={styles.containerList}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    navigation.navigate('MovieDetail', {movieID: item.id})
                  }>
                  <View
                    style={{
                      width: '45%',
                    }}>
                    <View>
                      <View>
                        <AutoHeightImage
                          source={{
                            uri: `${API_URL_IMAGES}w300/${item.poster_path}`,
                          }}
                          width={(width - 80) / 2}
                          style={{
                            borderRadius: 15,
                          }}
                        />
                      </View>
                      <View
                        style={{
                          paddingTop: 20,
                        }}>
                        <Text
                          bold
                          style={{
                            fontSize: RFPercentage(2.5),
                            marginBottom: 5,
                          }}>
                          {item.original_title}
                        </Text>
                        <Text
                          style={{
                            color: theme.colors.grey1,
                          }}>
                          {item.overview.substring(0, 50) + '...'}
                        </Text>
                      </View>
                    </View>
                  </View>
                </TouchableWithoutFeedback>
              )}
            />
          )}
        </View>
      );
}

const styles = StyleSheet.create({
  containerList: {
    justifyContent: 'space-around',
    padding: 15,
  },
});