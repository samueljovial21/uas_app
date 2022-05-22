import { StyleSheet, Text, View, TouchableOpacity, Image, StatusBar } from 'react-native';
import React from 'react';

export default function HomeScreen({ navigation }) {

  const start = () => {
    navigation.navigate('Daftar', {

    })
  }

  return (
    <TouchableOpacity
      style={styles.press}
      onPress={start}
    >
      <View style={styles.container}>
        <Image
          style={{ width: 150, height: 150, marginBottom: 30 }}
          source={require('../components/phone_icon.png')}
        />
        <View>
          <Text style={styles.homeTitle}>UAS PAM APP</Text>
        </View>
        <View style={styles.lineSyles}>
        </View>
        <View style={styles.viewHomeDetail}>
          <Text style={styles.homeDetail}>A Simple Items List App</Text>
          <Text style={styles.homeDetail}>Using API React Expo</Text>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image
            style={{ width: 60, height: 60, marginTop: 30 }}
            source={require('../components/click_test.gif')}
          />
          <Text>
            Tap Anywhere to Begin
          </Text>
        </View>
        <StatusBar backgroundColor='black' barStyle="light-content" />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  homeTitle: {
    fontSize: 30,
    fontWeight: '200',
  },

  homeDetail: {
    fontSize: 12,

  },

  viewHomeDetail: {
    alignItems: 'center',
    marginTop: 10,
  },

  lineSyles: {
    marginTop: 10,
    width: '80%',
    borderWidth: 0.5,
    borderRadius: 50,
  },

  press: {
    width: '100%',
    height: '100%',
  },
});
