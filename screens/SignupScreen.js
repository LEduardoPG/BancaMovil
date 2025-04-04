import React from 'react';
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Icono para la flecha

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Medias lunas amarillas más alargadas hacia las esquinas */}
      <View style={[styles.moon, styles.topMoon]} />
      <View style={[styles.moon, styles.bottomMoon]} />

      {/* Flecha de regreso personalizada */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Imagen "CARLS STAR.png" encima del óvalo */}
      <Image
        source={require('../assets/CARLS STAR.png')}
        style={styles.carlsStarImage}
      />

      {/* Óvalo amarillo para los campos de entrada */}
      <View style={styles.oval}>
        <Text style={styles.title}>Complete the tasks</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Button title="Sign Up" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  moon: {
    position: 'absolute',
    width: 400,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#F1C232',
  },
  topMoon: {
    top: -75,
    left: '50%',
    marginLeft: -200,
  },
  bottomMoon: {
    bottom: -75,
    left: '50%',
    marginLeft: -200,
  },
  oval: {
    width: 350,
    height: 450,
    backgroundColor: '#F1C232',
    borderRadius: 150,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '90%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  signupText: {
    marginTop: 20,
    color: '#0000EE',
    textDecorationLine: 'underline',
  },
  backButton: {
    position: 'absolute',
    top: 40, // Ajusta según la posición deseada
    left: 20,
  },
  // Estilo para la imagen "CARLS STAR.png" encima del óvalo
  carlsStarImage: {
    position: 'absolute',
    top: 85,  // Ajusta la distancia desde la parte superior del óvalo
    width: 150, // Tamaño de la imagen
    height: 150, // Tamaño de la imagen
    resizeMode: 'contain', // Ajuste de la imagen
  },
});

export default SignupScreen;



