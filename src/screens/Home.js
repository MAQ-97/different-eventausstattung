import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';
import axios from 'axios';
import Woocommerce from '../functions/Woocommerce';

const Home = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    Woocommerce.getCategories()
      .then((res) => {
        setCategories(res.data);
        setIsLoaded(true);
        console.log(res.data, 'response');
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <View
        style={{
          flex: 1,
          paddingHorizontal: '2.8%',
          // backgroundColor: 'red',
          marginBottom: 50,
        }}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* <> */}
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  marginTop: 15,
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}>
                SHOP
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  flexWrap: 'wrap',
                }}>
                {categories.map((item, index) => (
                  <Category
                    key={index}
                    label={item.name}
                    imageUri={{uri: item.image.src}}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};
export default Home;
