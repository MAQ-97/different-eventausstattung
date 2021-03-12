import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Title, Text, TextInput, Checkbox} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {apiActiveURL} from '../../ApiBaseUrl';
import Header from '../components/Header';

const RegisterScreen = (props) => {
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [solutation, setSolutation] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [checked, setChecked] = React.useState(false);

  const [nonce, setNonce] = useState('');

  const handleValidation = () => {
    // if(solutation == ''){
    //   alert('Please Enter Solutation!!!');
    // }else
    // if (name == '') {
    //   alert('Please Enter Name!!!');
    // } else if (email == '') {
    //   alert('Please Enter Email!!!');
    // } else if (password == '' || cpassword == '') {
    //   alert('Please Enter Password!!!');
    // } else if (password != cpassword) {
    //   alert('Confirm Password Incorrect!!!');
    // } else {
    //   alert('Succussfully Validated!!!');
    // }
    authenticate();
  };

  const url = `${apiActiveURL}/get_nonce/?controller=user&method=register`;

  const authenticate = async () => {
    await Axios.get(url).then(function (response) {
      register(response.data.nonce);
    });
  };

  const register = (nonce) => {
    const RUrl = `${apiActiveURL}/user/register/?insecure=cool&username=${name}&email=${email}&nonce=${nonce}&user_pass=${password}`;
    Axios.post(RUrl)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
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
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title style={{alignSelf: 'center', marginTop: 15}}>
            Create Account
          </Title>
          <TextInput
            mode="outlined"
            value={company}
            placeholder="Company"
            onChangeText={(text) => setCompany(text)}
            placeholderTextColor="#505050"
            style={{marginTop: 10, backgroundColor: '#fff'}}
            theme={{
              colors: {
                primary: '#44196c',
                underlineColor: 'transparent',
                placeholder: '#e9e9e9',
              },
            }}
          />
          <TextInput
            mode="outlined"
            value={phone}
            placeholder="Phone Number"
            keyboardType="numeric"
            onChangeText={(text) => setPhone(text)}
            placeholderTextColor="#505050"
            style={{marginTop: 10, backgroundColor: '#fff'}}
            theme={{
              colors: {
                primary: '#44196c',
                underlineColor: 'transparent',
                placeholder: '#e9e9e9',
              },
            }}
          />
          <TextInput
            mode="outlined"
            value={solutation}
            placeholder="Solutation*"
            onChangeText={(text) => setSolutation(text)}
            placeholderTextColor="#505050"
            style={{marginTop: 10, backgroundColor: '#fff'}}
            theme={{
              colors: {
                primary: '#44196c',
                underlineColor: 'transparent',
                placeholder: '#e9e9e9',
              },
            }}
          />
          <TextInput
            mode="outlined"
            value={name}
            placeholder="Full Name*"
            onChangeText={(text) => setName(text)}
            placeholderTextColor="#505050"
            style={{marginTop: 10, backgroundColor: '#fff'}}
            theme={{
              colors: {
                primary: '#44196c',
                underlineColor: 'transparent',
                placeholder: '#e9e9e9',
              },
            }}
          />
          <TextInput
            mode="outlined"
            value={email}
            placeholder="Email Address*"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor="#505050"
            style={{marginTop: 10, backgroundColor: '#fff'}}
            theme={{
              colors: {
                primary: '#44196c',
                underlineColor: 'transparent',
                placeholder: '#e9e9e9',
              },
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              paddingTop: 10,
              paddingLeft: 10,
            }}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color="#9e8035"
              uncheckedColor="#9e8035"
            />
            <Text>Subscribe to newsletter</Text>
          </View>
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
                  <Icon name={'eye-slash'} size={15} color="#9e8035" />
                )}
              />
            }
          />
          <TextInput
            mode="outlined"
            value={cpassword}
            placeholder="Password"
            secureTextEntry={true}
            onChangeText={(text) => setCpassword(text)}
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
                  <Icon name={'eye-slash'} size={15} color="#9e8035" />
                )}
              />
            }
          />
          <TouchableOpacity
            style={{backgroundColor: '#9e8035', marginVertical: 20}}
            onPress={() => handleValidation()}>
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
        </ScrollView>
      </View>
    </>
  );
};

export default RegisterScreen;
