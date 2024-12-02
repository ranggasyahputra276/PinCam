import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function RegisterSuccessScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Success</Text>
      <Text style={styles.message}>Your data has been successfully saved, welcome to PinCam. Enjoy!</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.back}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    color: '#555',
    marginVertical: 10,
  },
  back: {
    color: 'blue',
    marginTop: 20,
    fontSize: 16,
  },
});
