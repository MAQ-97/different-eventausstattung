import React from 'react';
import {Text, Image, View} from 'react-native';

const Category = (props) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'column',
          padding: 10,
          alignItems: 'center',
          flexBasis: '33.33%',
          // backgroundColor: ,
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
        <Text
          style={{
            marginTop: 5,
            //backgroundColor: 'green',
            textAlign: 'center',
            fontSize: 11,

            // alignItems: 'center',
          }}
          numberOfLines={3}>
          {props.label}
        </Text>
      </View>
    </>
  );
};

export default Category;
