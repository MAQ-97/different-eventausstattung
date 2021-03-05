import React from 'react';
import {View, Text, TouchableOpacity, Image, Dimensions, TouchableWithoutFeedback} from 'react-native';
import Images from '../images';
import { useNavigation, CommonActions } from '@react-navigation/native';

export default Tab = (props) => {
  const navigation = useNavigation();
  const focused = props.accessibilityState.selected;
  const icon = Images.icons[props.label];
  //const icon = !focused ? Images.icons[props.label] : Images.icons[`${props.label}Focused`];
//   const screenHeight = Dimensions.get('window').height;
//   const Fcolor = !focused ? '#fff' : '#365a04';

//   const handleNavigate = () => {
//     navigation.dispatch(
//       CommonActions.reset({
//         routes: [{name: props.label}],
//       }),
//     );
//   };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate(props.label)} 
      style={{flex: 1, justifyContent: 'center', alignItems: 'center' , backgroundColor: focused ? '#44196c' : '#30104e' , paddingVertical: 10}}>
      <View style={{alignItems: 'baseline', justifyContent: 'center'}}>
        <Image
          source={icon}
          style={{ resizeMode: 'center' , alignSelf: 'baseline'}}
        />
        {/* <Text
          style={{
            fontSize: screenHeight * 0.0125,
            color: Fcolor,
            paddingTop: 4,
          }}>
          {props.label}
        </Text> */}
      </View>
    </TouchableOpacity>
  );
};

