import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import TabComponent from '../components/Tab';

import Home from './Home';
import About from './About';
import Favorite from './Favorite';
import Cart from './Cart';
import Account from './Account';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

const ShopStack = createStackNavigator();
const AboutStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const CartStack = createStackNavigator();
const AccountStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            //height: '13.5%',
            alignItems: 'flex-end',
            backgroundColor: '#30104e',
            borderTopWidth: 0,
            position: 'absolute',
            //left: 20,
            //right: 20,
            //bottom: margbot,
            //elevation: 0,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={ShopStackScreen}
          options={{
            tabBarButton: (props) => <TabComponent label="Home" {...props} />,
          }}
        />
        <Tab.Screen name="About" component={AboutStackScreen} options={{
            tabBarButton: (props) => <TabComponent label="About" {...props} />,
          }} />
        <Tab.Screen name="Favorite" component={FavoriteStackScreen} options={{
            tabBarButton: (props) => <TabComponent label="Favorite" {...props} />,
          }}/>
        <Tab.Screen name="Cart" component={CartStackScreen} options={{
            tabBarButton: (props) => <TabComponent label="Cart" {...props} />,
          }}/>
        <Tab.Screen name="Account" component={AccountStackScreen} options={{
            tabBarButton: (props) => <TabComponent label="Account" {...props} />,
          }}/>
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
      <AccountStack.Screen name="LoginScreen" component={LoginScreen} />
      <AccountStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <AccountStack.Screen name="Account" component={Account} />
    </AccountStack.Navigator>
  );
};
