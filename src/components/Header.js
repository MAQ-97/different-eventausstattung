import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    // <View style={styles.headerContainer}>
    //   <Image
    //     source={require('../images/logo.png')}
    //     resizeMode="contain"
    //     style={styles.headerImg}
    //   />

    //   <View style={styles.iconView}>
    //     <Ionicons name="search" size={25} style={{color: '#fff'}} />
    //   </View>
    //   <Octicons
    //     name="kebab-vertical"
    //     size={30}
    //     style={{paddingLeft: 15, color: '#44196c'}}
    //   />

    //   {/* </View> */}
    // </View>

    <View style={styles.headerContainer}>
      <View style={{justifyContent: 'flex-start'}}>
        <Image
          source={require('../images/Logo.png')}
          resizeMode="contain"
          style={styles.headerImg}
        />
      </View>
      <View
        style={{
          // justifyContent: 'flex-end',
          position: 'absolute',
          height: 42,
          width: 42,
          right: 45,
          borderRadius: 21.5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#9e8035',
        }}>
        <Ionicons name="search" size={25} style={{color: '#fff'}} />
      </View>

      <Octicons
        name="kebab-vertical"
        size={30}
        style={{
          // paddingLeft: 15,
          justifyContent: 'flex-end',
          color: '#44196c',
          position: 'absolute',
          justifyContent: 'center',
          alignItems: 'center',
          // left: 20,
          right: 25,
          // left: 155,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#f3f3f3',
    flexDirection: 'row',
    alignItems: 'center',
  },

  headerImg: {
    height: 80,
    width: 150,
    //   backgroundColor: 'green',
    marginLeft: 10,
  },
  iconView: {
    marginLeft: 100,
    justifyContent: 'center',
    backgroundColor: '#9e8035',
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: 'center',
    // marginRight: ,
  },
});
export default Header;
