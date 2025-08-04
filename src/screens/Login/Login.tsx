/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import logo from '../../images/erreparlogo.png';
import {AuthData, useAuth} from '../../context/AuthContext';
import BASE_URL from '../../utils/url';

const Login = ({navigation}): JSX.Element => {
  const {onSetAuthDataHandler} = useAuth();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;
    if (!mail || !password) {
      Alert.alert(
        'Ocurrió un error',
        'Por favor completa todos los campos obligatorios',
      );
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/User/Login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: mail,
          password: password,
        }),
      });
      const json = await response.json();
      console.log(json);
      setLoading(false);
      if (json === 'Email o contraseña incorrecto') {
        Alert.alert('Ocurrió un error', 'Email o contraseña incorrecto');
        return;
      }
      if (json === 'El usuario está deshabilitado') {
        Alert.alert('Ocurrió un error', 'El usuario está deshabilitado');
        return;
      }
      if (json?.token) {
        const userLoginData: AuthData = {
          token: json?.token,
          user: {
            mail: json?.user?.mail,
            id: json?.user?.id,
          },
        };
        onSetAuthDataHandler(userLoginData);
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
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
          <Text style={styles.label}>
            Mail <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            value={mail}
            onChange={e => setMail(e.nativeEvent.text)}
            style={styles.inputText}
            placeholder="Escribe tu mail"
            keyboardType="email-address"
          />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>
            Contraseña <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
            style={styles.inputText}
            placeholder="Escribe tu contraseña"
            secureTextEntry
          />
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('ResetPassword')}>
          <View style={styles.containerSections}>
            <Text style={styles.forgotPass}>¿Olvidó su contraseña?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogin} activeOpacity={0.8}>
          <View style={styles.buttonContainer}>
            {loading ? (
              <ActivityIndicator size={25} color={'#ffffff'} />
            ) : (
              <Text style={styles.buttonText}>Entrar</Text>
            )}
          </View>
        </TouchableOpacity>

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
    width: 300,
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
