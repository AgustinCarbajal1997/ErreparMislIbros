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
import {useAuth} from '../../context/AuthContext';

const Login = ({navigation}): JSX.Element => {
  const {setIsAuthenticated} = useAuth();

  const handleLogin = () => {
    // Validar usuario, etc.
    setIsAuthenticated(true);
  };
  return (
    <View style={styles.screenContainer}>
      <View style={styles.containerForm}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Inicia Sesión</Text>
          <Text style={styles.subtitle}>Ingresá tu email y contraseña</Text>
        </View>
        <View style={styles.containerSections}>
          <Text style={styles.label}>Mail</Text>
          <TextInput style={styles.inputText} placeholder="Escribe tu mail" />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>Contraseña</Text>
          <TextInput
            style={styles.inputText}
            placeholder="Escribe tu contraseña"
          />
        </View>
        <View style={styles.containerSections}>
          <Text style={styles.forgotPass}>¿Olvidó su contraseña?</Text>
        </View>
        <View style={{width: '100%'}}>
          <TouchableOpacity onPress={handleLogin}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Entrar</Text>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <View style={styles.containerSections}>
            <Text style={styles.signUp}>
              ¿Aún no tienes cuenta?{' '}
              <Text style={{color: 'red'}}>Registrate</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
