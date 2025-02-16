import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Title, Text, TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {apiActiveURL} from '../../ApiBaseUrl';
import Header from '../components/Header';

const LoginScreen = (props) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const url = `${apiActiveURL}/user/generate_auth_cookie/?insecure=cool&username=${user}&password=${password}`;

  const authenticate = () => {
    axios.post(url).then(function (response) {
      console.log(response);
      if (response.data.status === 'ok') {
        alert('Login Successfully');
      } else {
        alert('Invalid Email or Password');
      }
    });
  };

  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,
          paddingHorizontal: '2.8%',
          backgroundColor: '#fff',
          marginBottom: 50,
        }}>
        <ScrollView>
          <Title style={{alignSelf: 'center', marginTop: 15}}>Login</Title>
          <Text style={{alignSelf: 'center', marginBottom: 15}}>
            If you already have an account, please login.
          </Text>
          <TextInput
            mode="outlined"
            value={user}
            placeholder="User"
            onChangeText={(text) => setUser(text)}
            placeholderTextColor="#505050"
            style={{marginTop: 10, backgroundColor: '#fff'}}
            theme={{
              colors: {
                primary: '#44196c',
                underlineColor: 'transparent',
                placeholder: '#e9e9e9',
              },
            }}
            right={
              <TextInput.Icon
                name={() => <Icon name={'user'} size={15} color="#9e8035" />}
              />
            }
          />
          <TextInput
            mode="outlined"
            value={password}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor="#505050"
            style={{
              marginTop: 10,
              backgroundColor: '#fff',
              borderColor: '#e9e9e9',
              textAlignVertical: 'center',
            }}
            theme={{
              colors: {
                primary: '#44196c',
                underlineColor: 'transparent',
                placeholder: '#e9e9e9',
              },
            }}
            right={
              <TextInput.Icon
                name={() => (
                  <Icon
                    name={'eye-slash'}
                    size={15}
                    color="#9e8035"
                    style={{}}
                  />
                )}
              />
            }
          />
          <TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                marginVertical: 20,
                textDecorationLine: 'underline',
              }}>
              Forget Password?
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor: '#9e8035'}}
            onPress={() => authenticate()}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#fff',
                paddingVertical: 18,
              }}>
              LOG IN
            </Text>
          </TouchableOpacity>
          <Title
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 23,
              paddingVertical: 18,
            }}>
            Not a customer?
          </Title>
          <TouchableOpacity
            style={{backgroundColor: '#9e8035'}}
            onPress={() => props.navigation.navigate('RegisterScreen')}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#fff',
                paddingVertical: 18,
              }}>
              CREATE ACCOUNT
            </Text>
          </TouchableOpacity>
          <Text style={{alignSelf: 'center', marginTop: 17, marginBottom: 3}}>
            Device Information
          </Text>
          <Text
            style={{
              alignSelf: 'center',
              color: '#505050',
              textAlign: 'center',
              paddingBottom: 15,
            }}>
            Device: OnePlus A5010{'\n'}Android-Version: 10 (Api 29){'\n'}
            App-Version: 1.1 (3){'\n'}Device-ID:
            asdewrv-e345r-3f45-4534-435456563c34
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

export default LoginScreen;
