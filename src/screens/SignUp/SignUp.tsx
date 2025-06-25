/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import logo from '../../images/erreparlogo.png';

const SignUp = ({navigation}): JSX.Element => {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.containerForm}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Crear cuenta</Text>
        </View>
        <View style={styles.containerSections}>
          <Text style={styles.label}>Ingresá tu nombre completo</Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput style={styles.inputTextSplit} placeholder="Nombre" />

            <TextInput style={styles.inputTextSplit} placeholder="Apellido" />
          </View>
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>Ingresá tu nº de teléfono</Text>
          <TextInput style={styles.inputText} placeholder="+5491112345678" />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>Ingresá tu mail</Text>
          <TextInput style={styles.inputText} placeholder="Escribe tu mail" />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput style={styles.inputText} placeholder="********" />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>Confirmá contraseña</Text>
          <TextInput style={styles.inputText} placeholder="********" />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.containerSections}>
            <Text style={styles.signUp}>
              ¿Ya tienes cuenta?{' '}
              <Text style={{color: '#00a88f'}}>Iniciá sesión</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: 60,
  },
  containerForm: {
    width: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerSections: {
    width: '100%',
    marginBottom: 16,
  },
  title: {
    width: '100%',
    fontSize: 24,
    color: '#000000',
  },
  subtitle: {
    fontSize: 16,
    color: '#00000070',
  },
  label: {
    fontSize: 16,
    color: '#000000',
    paddingBottom: 8,
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
    paddingHorizontal: 16,
  },
  inputTextSplit: {
    width: '49%',
    height: 44,
    borderRadius: 10,
    borderColor: '#00000050',
    borderWidth: 1,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    backgroundColor: '#00a88f',
    width: '100%',
    height: 44,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 15,
  },
  forgotPass: {
    color: '#00a88f',
    fontSize: 15,
    fontWeight: '500',
  },
  signUp: {
    color: '#00000080',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: '500',
  },
});
