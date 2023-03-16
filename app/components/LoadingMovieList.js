import React from 'react';

import { Skeleton } from "@rneui/themed";
import { FlatList, View } from "react-native";

export default LoadingMovieList = () => {
    return (
      <View >
        <FlatList
          data={[...new Array(20).keys()]}
          horizontal={false}
          keyExtractor={(_, index) => index.toString()}
          columnWrapperStyle={{
            justifyContent: 'space-around',
            padding: 15,
          }}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
              <View
                style={{
                  width: '45%',
                }}>
                <View>
                  <Skeleton
                    style={{
                      height: 200,
                    }}
                  />
                  <View
                    style={{
                      paddingTop: 20,
                    }}>
                    <Skeleton width={'90%'} />
                    <Skeleton width={'70%'} style={{marginTop: 8}} />
                  </View>
                </View>
              </View>
          )}
        />
      </View>
    );
}