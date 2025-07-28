/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import Zocial from 'react-native-vector-icons/Zocial';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
        <View style={styles.containerInfo}>
          <View>
            <Ionicons name="location-sharp" size={25} />
          </View>
          <Text style={styles.subtitle}>Viamonte 1484 - 1055 CABA</Text>
        </View>
        <View style={styles.containerInfo}>
          <View>
            <Ionicons name="phone-portrait-outline" size={25} />
          </View>
          <Text style={styles.subtitle}>4370-2002</Text>
        </View>
        <View style={styles.containerInfo}>
          <View>
            <Ionicons name="mail-sharp" size={25} />
          </View>
          <Text style={styles.subtitle}>clientes@errepar.com</Text>
        </View>
        <View style={styles.containerInfo}>
          <View>
            <Ionicons name="logo-whatsapp" size={25} />
          </View>
          <Text style={styles.subtitle}>11-59366406</Text>
        </View>
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
        <View style={styles.containerContactRedes}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.facebook.com/Errepar')}>
            <View>
              <Zocial name="facebook" size={25} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://twitter.com/errepar')}>
            <View>
              <Zocial name="twitter" size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://www.linkedin.com/company/errepar')
            }>
            <View>
              <Zocial name="linkedin" size={25} />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL('http://instagram.com/errepar_editorial')
            }>
            <View>
              <Ionicons name="logo-instagram" size={25} />
            </View>
          </TouchableOpacity>
        </View>
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
  containerInfo: {
    display: 'flex',
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  containerContactRedes: {
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
});
