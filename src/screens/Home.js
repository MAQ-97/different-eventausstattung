import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';

const Home = () => {
  return (
    <View style={{flex: 1, paddingHorizontal: '2.8%'}}>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <View style={{alignItems: 'center'}}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: 'bold',
                marginBottom: 15,
              }}>
              SHOP
            </Text>
          </View>
          <View
            style={{
              // backgroundColor: 'red',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              // backgroundColor: 'green',
            }}>
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            {/* </View> */}

            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />

            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
            <Category
              label="asdad"
              imageUri={require(`../images/Porzelian.png`)}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;
