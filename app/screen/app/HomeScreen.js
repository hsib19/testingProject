import { Button, Text, useTheme } from '@rneui/themed';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import {FlatList, TouchableWithoutFeedback, View} from 'react-native';

const { width } = Dimensions.get("screen");

export default HomeScreen = ({ navigation }) => {

    const { theme } = useTheme();

    const [loading, setLoading] = useState(true);
    const [listMovie, setListMovie] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        setTimeout(() => {
            setListMovie([...new Array(60).keys()])
            setLoading(false);
        }, 1000);
    }

    if (loading){
        return(
            <View>
                <Text>Loading...</Text>
            </View>
        )
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
              columnWrapperStyle={{
                justifyContent: 'space-around',
              }}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <TouchableWithoutFeedback>
                  <View
                    style={{
                      width: '45%',
                      marginBottom: 20
                    }}>
                    <View
                      style={
                        {
                          // width: '90%',
                        }
                      }>
                      <View>
                        <View 
                            style={{ height: 110, backgroundColor: '#f5f5f5', borderRadius: 15 }}
                         />
                      </View>
                      <View
                        style={{
                            paddingVertical: 20
                        }}
                      >
                        <Text>Title</Text>
                        <Text>Description</Text>
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