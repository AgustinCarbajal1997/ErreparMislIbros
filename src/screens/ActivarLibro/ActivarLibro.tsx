/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import dondecomo from '../../images/codigo_donde.jpg';
import ebook from '../../images/codigo_activacion_ebook.png';
import {useAuth} from '../../context/AuthContext';
import BASE_URL from '../../utils/url';

const ActivarLibro = ({}): JSX.Element => {
  const {authData} = useAuth();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleActiveCode = async () => {
    if (!code) return;
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/Book/ActiveBook?codeBook=${code}&userid=${authData?.user?.id}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authData?.token,
          },
        },
      );
      const data = await response.json();

      if (data?.success === true) {
        Alert.alert('Solicitud exitosa', 'Libro activado correctamente');
      }
      if (data === 'El usuario ya tiene el libro activo') {
        Alert.alert('Ocurrió un error', 'El usuario ya tiene el libro activo.');
      }
      if (data === 'No existe Libro') {
        Alert.alert('Ocurrió un error', 'No existe Libro.');
      }
      setLoading(false);
      setCode('');
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
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
              value={code}
              onChange={e => setCode(e.nativeEvent.text)}
              placeholder="Ingresá el código del libro"
            />
            <View style={{paddingVertical: 8}} />
            <TouchableOpacity onPress={handleActiveCode} activeOpacity={0.8}>
              <View style={styles.buttonContainer}>
                {loading ? (
                  <ActivityIndicator size={25} color={'#ffffff'} />
                ) : (
                  <Text style={styles.buttonText}>Activar Libro</Text>
                )}
              </View>
            </TouchableOpacity>
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
