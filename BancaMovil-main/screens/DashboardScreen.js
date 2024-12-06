import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Medias lunas amarillas */}
      <View style={[styles.moon, styles.topMoon]} />
      <View style={[styles.moon, styles.bottomMoon]} />

      {/* Flecha de regreso personalizada */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>

      {/* Imagen superior (BURGER) */}
      <Image
        source={require('../assets/burger.png')}
        style={styles.burgerTopLeft}
      />

      {/* Título del Dashboard */}
      <Text style={styles.title}>Bienvenido a tu Banca</Text>

      {/* Opciones del Dashboard */}
      <View style={styles.optionsContainer}>
        {/* Dinero */}
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image
            source={require('../assets/burger.png')} // Imagen de referencia
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Dinero</Text>
        </TouchableOpacity>

        {/* Transferir Dinero */}
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image
            source={require('../assets/CARLS STAR.png')} // Imagen de referencia
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Transferir Dinero</Text>
        </TouchableOpacity>

        {/* Recibir Dinero */}
        <TouchableOpacity style={styles.option} onPress={() => {}}>
          <Image
            source={require('../assets/burger.png')} // Imagen de referencia
            style={styles.optionImage}
          />
          <Text style={styles.optionText}>Recibir Dinero</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 20,
    top: -30,
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

export default DashboardScreen;
