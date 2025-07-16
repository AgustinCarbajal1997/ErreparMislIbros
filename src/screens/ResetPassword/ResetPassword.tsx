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

const ResetPassword = ({navigation}): JSX.Element => {
  const {onSetAuthDataHandler} = useAuth();
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setrePassword] = useState('');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [codigo, setCodigo] = useState(false);

  const handleSendCode = async () => {
    if (loading) return;
    if (!mail) {
      Alert.alert(
        'Ocurrió un error',
        'Por favor completa todos los campos obligatorios',
      );
      return;
    }
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}/User/ForgetPassword?email=${mail}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: mail,
            password: password,
          }),
        },
      );
      const json = await response.json();

      setLoading(false);
      if (json === 'Código generado y enviado exitosamente.') {
        setCodigo(true);
        return;
      }
      if (json === 'Email no existe o el usuario está deshabilitado') {
        Alert.alert(
          'Ocurrió un error',
          'Email no existe o el usuario está deshabilitado',
        );
        return;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleChangePassword = async () => {
    if (loading) return;
    if (!mail || !password || !code || !password) {
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
      const response = await fetch(
        `${BASE_URL}/User/ResetPassword?email=${mail}&codigo=${code}&nuevaContrasena=${password}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const json = await response.json();

      setLoading(false);
      if (json === 'Contraseña actualizada exitosamente.') {
        Alert.alert(
          'Solicitud exitosa',
          'Contraseña actualizada exitosamente. Ya puede volver a iniciar sesión en la sección correspondiente.',
        );
        return;
      }
      if (json === 'No se encontró el código para este email.') {
        Alert.alert(
          'Ocurrió un error',
          'No se encontró el código para este email.',
        );
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
          <Text style={styles.title}>Recuperar contraseña</Text>
          <Text style={styles.subtitle}>Código enviado exitosamente</Text>
        </View>
        {codigo ? (
          <View style={styles.containerSections}>
            <Text style={styles.label}>
              Mail <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              value={mail}
              onChange={e => setMail(e.nativeEvent.text)}
              style={styles.inputText}
              placeholder="Escribe tu mail"
            />
            <View style={{paddingVertical: 8}} />
            <Text style={styles.label}>
              Código <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              value={code}
              onChange={e => setCode(e.nativeEvent.text)}
              style={styles.inputText}
              placeholder="Ingresá el código"
            />
            <View style={{paddingVertical: 8}} />
            <Text style={styles.label}>
              Nueva Contraseña <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              value={password}
              onChange={e => setPassword(e.nativeEvent.text)}
              style={styles.inputText}
              placeholder="Escribe tu contraseña"
            />
            <View style={{paddingVertical: 8}} />
            <Text style={styles.label}>
              Repite Contraseña <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              value={repassword}
              onChange={e => setrePassword(e.nativeEvent.text)}
              style={styles.inputText}
              placeholder="Repite tu contraseña"
            />
            <TouchableOpacity onPress={() => setCodigo(false)}>
              <View style={[styles.containerSections, {paddingTop: 10}]}>
                <Text style={styles.signUp}>
                  <Text style={{color: '#00a88f'}}>
                    No me llegó el código. Reenviar
                  </Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.containerSections}>
            <Text style={styles.label}>
              Mail <Text style={{color: 'red'}}>*</Text>
            </Text>
            <TextInput
              value={mail}
              onChange={e => setMail(e.nativeEvent.text)}
              style={styles.inputText}
              placeholder="Escribe tu mail"
            />
            <TouchableOpacity onPress={() => setCodigo(true)}>
              <View style={[styles.containerSections, {paddingTop: 10}]}>
                <Text style={styles.signUp}>
                  <Text style={{color: '#00a88f'}}>Ya tengo código</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {codigo ? (
          <TouchableOpacity onPress={handleChangePassword} activeOpacity={0.8}>
            <View style={styles.buttonContainer}>
              {loading ? (
                <ActivityIndicator size={25} color={'#ffffff'} />
              ) : (
                <Text style={styles.buttonText}>Cambiar</Text>
              )}
            </View>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleSendCode} activeOpacity={0.8}>
            <View style={styles.buttonContainer}>
              {loading ? (
                <ActivityIndicator size={25} color={'#ffffff'} />
              ) : (
                <Text style={styles.buttonText}>Enviar código</Text>
              )}
            </View>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.containerSections}>
            <Text style={styles.signUp}>
              ¿Ya tenés cuenta?{' '}
              <Text style={{color: '#00a88f'}}>Iniciá sesión</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ResetPassword;

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
