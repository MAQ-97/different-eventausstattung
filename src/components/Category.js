import React from 'react';
import {Text, Image, View} from 'react-native';

const Category = (props) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'column',
          padding: 15,
          alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <Image
          // source={require('../images/Porzelian.png')}
          style={{
            height: 80,
            width: 80,
            borderRadius: 40,
          }}
          //   source={{uri: image}}
          source={props.imageUri}
          resizeMode="cover"
        />

        {/* <Text style={{marginTop: 5}}>Porzellan</Text> */}
        <Text style={{marginTop: 5}}>{props.label}</Text>
      </View>
    </View>
  );
};

export default Category;
