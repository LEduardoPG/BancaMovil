import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MoneyScreen = ({ navigation }) => {
  const balance = 1500.75; // Ejemplo de saldo, puedes obtenerlo desde el estado o una API

  return (
    <View style={styles.container}>
      {/* Medias lunas amarillas */}
      <View style={[styles.moon, styles.topMoon]} />
      <View style={[styles.moon, styles.bottomMoon]} />

      {/* Flecha de regreso personalizada */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()} // Regresa a la pantalla anterior
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Imagen superior (BURGER) */}
      <Image
        source={require('../assets/burger.png')}
        style={styles.burgerTopLeft}
      />

      {/* Título de la pantalla */}
      <Text style={styles.title}>Saldo Disponible</Text>

      {/* Monto del saldo */}
      <Text style={styles.balanceAmount}>
        ${balance.toFixed(2)} {/* Formateo de saldo con 2 decimales */}
      </Text>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E8B57', // Verde para indicar dinero
    marginVertical: 20,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  burgerTopLeft: {
    position: 'absolute',
    top: 80,
    left: 200,
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  optionsContainer: {
    width: '90%',
    marginTop: 50,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  option: {
    width: '80%',
    height: 120,
    backgroundColor: '#F1C232',
    borderRadius: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 4,
  },
  optionImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default MoneyScreen;
