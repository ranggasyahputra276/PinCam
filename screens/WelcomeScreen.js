import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>PinCam</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.start}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  start: {
    marginTop: 20,
    fontSize: 18,
    color: 'blue',
  },
});
