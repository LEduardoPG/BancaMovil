import React from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {/* Imagen "CARLS STAR.png" encima del óvalo */}
        <Image
          source={require('../assets/CARLS STAR.png')}
          style={styles.image}
        />

        {/* Medias lunas amarillas más alargadas hacia las esquinas */}
        <View style={[styles.moon, styles.topMoon]} />
        <View style={[styles.moon, styles.bottomMoon]} />

        {/* Óvalo amarillo para los campos de entrada */}
        <View style={styles.oval}>
          <Text style={styles.text}>carl.s bank</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
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
    height: 200,
    backgroundColor: '#F1C232',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  image: {
    position: 'absolute', // Para posicionarla encima del óvalo
    top: 100,  // Ajusta la distancia desde la parte superior de la pantalla
    width: 250, // Tamaño de la imagen
    height: 250, // Tamaño de la imagen
    resizeMode: 'contain', // Ajuste de la imagen
  },
});

export default HomeScreen;



