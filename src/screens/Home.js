import React from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import Header from '../components/Header';
import Category from '../components/Category';

const Home = () => {
  return (
    <>
      <Header />
      <View
        style={{flex: 1, paddingHorizontal: '2.8%', backgroundColor: '#fff', marginBottom: 50}}>
        <SafeAreaView style={{flex: 1}}>
          <ScrollView showsVerticalScrollIndicator={false}>
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
            <View
              style={{
                // backgroundColor: 'red',
                flexDirection: 'row',
                justifyContent: 'center',
                flexWrap: 'wrap',
                // backgroundColor: 'green',
              }}>
              <Category
                label="Porzelian"
                imageUri={require(`../images/Porzelian.png`)}
              />
              <Category
                label="Gläser"
                imageUri={require(`../images/Glaser.png`)}
              />
              <Category
                label="Besteck"
                imageUri={require(`../images/Besteck.png`)}
              />
              {/* </View> */}

              <Category
                label="Tische & Stehtische"
                imageUri={require(`../images/Tische.png`)}
              />
              <Category
                label="Stühle & Barhocker"
                imageUri={require(`../images/Barhocker.png`)}
              />
              <Category
                label="Loungemobiliar"
                imageUri={require(`../images/Lounge.png`)}
              />

              <Category
                label="Theken und
                Buffetsysteme"
                imageUri={require(`../images/Theken.png`)}
              />
              <Category
                label="Tischwäsche"
                imageUri={require(`../images/Tisc.png`)}
              />
              <Category
                label="Küchen und
                Gastronomieaus-
                stattung"
                imageUri={require(`../images/kuchen.png`)}
              />
              <Category
                label="Verschiedenes"
                imageUri={require(`../images/versc.png`)}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  );
};

export default Home;
