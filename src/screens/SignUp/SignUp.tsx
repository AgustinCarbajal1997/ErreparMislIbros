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

const SignUp = ({navigation}): JSX.Element => {
  const {onSetAuthDataHandler} = useAuth();
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (loading) return;
    if (!mail || !password || !name || !surname || !repassword || !phone) {
      Alert.alert(
        'Ocurrió un error',
        'Por favor completa todos los campos obligatorios',
      );
      return;
    }
    if (password !== repassword) {
      Alert.alert(
        'Ocurrió un error',
        'La confirmación de contraseña no es igual a la contraseña',
      );
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/User/Register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: mail,
          password: password,
          nombre: name,
          apellido: surname,
          telefono: phone,
          repassword: repassword,
        }),
      });
      const json = await response.json();
      setLoading(false);
      console.log(json);
      if (json === 'El mail ingresado ya esta en uso. Ingrese otro por favor') {
        Alert.alert(
          'Ocurrió un error',
          'El mail ingresado ya está en uso. Ingrese otro por favor',
        );
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
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.containerForm}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Crear cuenta</Text>
        </View>
        <View style={styles.containerSections}>
          <Text style={styles.label}>
            Ingresá tu nombre completo <Text style={{color: 'red'}}>*</Text>
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={styles.inputTextSplit}
              placeholder="Nombre"
              value={name}
              onChange={e => setName(e.nativeEvent.text)}
            />

            <TextInput
              style={styles.inputTextSplit}
              placeholder="Apellido"
              value={surname}
              onChange={e => setSurname(e.nativeEvent.text)}
            />
          </View>
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>
            Ingresá tu nº de teléfono <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="+5491112345678"
            value={phone}
            onChange={e => setPhone(e.nativeEvent.text)}
          />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>
            Ingresá tu mail <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="Escribe tu mail"
            value={mail}
            onChange={e => setMail(e.nativeEvent.text)}
          />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>
            Contraseña <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="********"
            value={password}
            onChange={e => setPassword(e.nativeEvent.text)}
          />
          <View style={{paddingVertical: 8}} />
          <Text style={styles.label}>
            Confirmá contraseña <Text style={{color: 'red'}}>*</Text>
          </Text>
          <TextInput
            style={styles.inputText}
            placeholder="********"
            value={repassword}
            onChange={e => setRepassword(e.nativeEvent.text)}
          />
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={handleSignUp}>
          <View style={styles.buttonContainer}>
            {loading ? (
              <ActivityIndicator size={25} color={'#ffffff'} />
            ) : (
              <Text style={styles.buttonText}>Crear cuenta</Text>
            )}
          </View>
        </TouchableOpacity>
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
