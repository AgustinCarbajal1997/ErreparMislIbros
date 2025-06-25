/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import dondecomo from '../../images/codigo_donde.jpg';
import ebook from '../../images/codigo_activacion_ebook.png';

const ActivarLibro = ({}): JSX.Element => {
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Activar Libro</Text>
        </View>

        <View style={styles.cardContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000000',
            }}>
            Ingresá el código del libro para activarlo
          </Text>
          <View
            style={{
              marginVertical: 10,
              width: '100%',
              height: 1,
              backgroundColor: '#00000020',
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 15,
                color: '#000000',
              }}>
              Código del libro
            </Text>
            <View style={{paddingVertical: 4}} />
            <TextInput
              style={styles.inputText}
              placeholder="Ingresá el código del libro"
            />
            <View style={{paddingVertical: 8}} />
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Text style={styles.buttonText}>Activar Libro</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{paddingVertical: 8}} />
        <View style={styles.cardContainerDetail}>
          <Image source={dondecomo} style={styles.image} />
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000000',
            }}>
            ¿Dónde encuentro el código?
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: '#000000',
            }}>
            Lo encontrarás en la contratapa de tu libro
          </Text>
        </View>
        <View style={{paddingVertical: 8}} />
        <View style={styles.cardContainerDetail}>
          <Image
            source={ebook}
            style={{
              width: 350,
              height: 200,
              aspectRatio: 1.5,
              resizeMode: 'contain',
            }}
          />
          <Text
            style={{
              fontSize: 15,
              color: '#000000',
            }}>
            O en la página de legales de ebook
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ActivarLibro;

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#ffffff90',
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
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  cardContainerDetail: {
    backgroundColor: '#fff',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  image: {
    width: 350,
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
  buttonContainer: {
    width: '100%',
    height: 44,
    backgroundColor: '#00a88f',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});
