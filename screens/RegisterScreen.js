import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({ username: '', email: '', password: '', confirmPassword: '' });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello There! Register to get started</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(value) => setForm({ ...form, username: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(value) => setForm({ ...form, email: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={(value) => setForm({ ...form, password: value })}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        onChangeText={(value) => setForm({ ...form, confirmPassword: value })}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RegisterSuccess')}
      >
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.loginText}>Already have an account? Login Now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  button: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  loginText: {
    color: 'blue',
    textAlign: 'center',
    marginTop: 10,
  },
});
