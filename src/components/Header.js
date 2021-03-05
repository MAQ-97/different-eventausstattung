import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Octicons from 'react-native-vector-icons/Octicons';

import {Image, StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('../images/logo.png')}
        resizeMode="contain"
        style={styles.headerImg}
      />

      <View style={styles.iconView}>
        <Ionicons name="search" size={25} style={{color: '#fff'}} />
      </View>
      <Octicons
        name="kebab-vertical"
        size={30}
        style={{paddingLeft: 15, color: '#44196c'}}
      />

      {/* </View> */}
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
    height: 90,
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
