/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';

const Publicaciones = ({navigation}): JSX.Element => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.containerScreen}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Mis publicaciones</Text>
        </View>
        <View style={styles.containerSections}>
          <TextInput
            style={styles.inputText}
            placeholder="Buscar por publicación"
          />
        </View>

        <View style={styles.cardContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetallePublicacion')}>
            <View style={styles.cardView}>
              <Image
                source={{
                  uri: 'https://tiendaonline.errepar.com/3121-large_default/guia-practica-para-el-liquidador-de-sueldos.jpg',
                }}
                style={styles.image}
              />
              <Text style={styles.textCard}>
                Guía práctica para el liquidador de sueldos
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Publicaciones;

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff90',
  },
  containerScreen: {
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSections: {
    width: '100%',
    marginBottom: 16,
  },
  title: {
    color: '#00a88f',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#00000070',
  },
  containerTitle: {
    width: '100%',
    paddingBottom: 20,
    paddingTop: 16,
  },
  inputText: {
    width: '100%',
    height: 44,
    borderRadius: 10,
    borderColor: '#00000050',
    borderWidth: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  cardContainer: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    aspectRatio: 1.5,
    resizeMode: 'contain',
  },
  textCard: {
    color: '#00a88f',
    fontSize: 18,
    fontWeight: '600',
    width: 300,
    textAlign: 'center',
  },
});
