import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';

import Home from './Home';
import About from './About';
import Favorite from './Favorite';
import Cart from './Cart';
import Account from './Account';

const ShopStack = createStackNavigator();
const AboutStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const CartStack = createStackNavigator();
const AccountStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Shop" component={ShopStackScreen} />
        <Tab.Screen name="About" component={AboutStackScreen} />
        <Tab.Screen name="Favorite" component={FavoriteStackScreen} />
        <Tab.Screen name="Cart" component={CartStackScreen} />
        <Tab.Screen name="Account" component={AccountStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default index;

const ShopStackScreen = ({navigation}) => {
  return (
    <ShopStack.Navigator headerMode="none">
      <ShopStack.Screen name="Home" component={Home} />
    </ShopStack.Navigator>
  );
};

const AboutStackScreen = ({navigation}) => {
    return (
      <AboutStack.Navigator headerMode="none">
        <AboutStack.Screen name="About" component={About} />
      </AboutStack.Navigator>
    );
  };

  const FavoriteStackScreen = ({navigation}) => {
    return (
      <FavoriteStack.Navigator headerMode="none">
        <FavoriteStack.Screen name="Favorite" component={Favorite} />
      </FavoriteStack.Navigator>
    );
  };

  const CartStackScreen = ({navigation}) => {
    return (
      <CartStack.Navigator headerMode="none">
        <CartStack.Screen name="Cart" component={Cart} />
      </CartStack.Navigator>
    );
  };

  const AccountStackScreen = ({navigation}) => {
    return (
      <AccountStack.Navigator headerMode="none">
        <AccountStack.Screen name="Account" component={Account} />
      </AccountStack.Navigator>
    );
  };