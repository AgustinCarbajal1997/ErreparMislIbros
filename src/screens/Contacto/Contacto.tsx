/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Contacto = ({}): JSX.Element => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Datos de contacto</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#00000070',
          marginVertical: 16,
        }}
      />
      <View style={styles.containerContact}>
        <Text style={styles.subtitle}>Viamonte 1484 - 1055 CABA</Text>
        <Text style={styles.subtitle}>4370-2002</Text>
        <Text style={styles.subtitle}>clientes@errepar.com</Text>
        <Text style={styles.subtitle}>11-59366406</Text>
      </View>
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: '#00000070',
          marginVertical: 16,
        }}
      />
      <View style={styles.containerContact}>
        <Text style={styles.subtitle}>También encontranos en:</Text>
      </View>
    </View>
  );
};

export default Contacto;

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
    color: '#000000',
    paddingBottom: 4,
  },
  containerTitle: {
    width: '100%',
    paddingBottom: 8,
    paddingTop: 16,
  },
  containerContact: {
    width: '100%',
  },
});
