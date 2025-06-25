/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import WebView from 'react-native-webview';

const DetallePublicacion = ({navigation}): JSX.Element => {
  const [visible, setVisible] = useState(false);

  const pdfUrl = encodeURIComponent(
    'https://portalerrepar.errepar.com/resources/images/appseparatas/236.pdf',
  );
  const googleViewerUrl = `https://docs.google.com/gview?embedded=true&url=${pdfUrl}`;
  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            Guía práctica para el liquidador de sueldos
          </Text>
          <Image
            source={{
              uri: 'https://tiendaonline.errepar.com/3121-large_default/guia-practica-para-el-liquidador-de-sueldos.jpg',
            }}
            style={styles.image}
          />
        </View>
        <View style={styles.containerSections}>
          <TextInput style={styles.inputText} placeholder="Buscar por título" />
        </View>

        <View style={styles.cardContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000000',
            }}>
            Contrato de trabajo. Empleadores. Obligación de contar con espacios
            de cuidados para menores de 3 años
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
              <Text
                style={{
                  fontSize: 15,
                  color: '#000000',
                  fontWeight: '500',
                }}>
                Fecha:
              </Text>{' '}
              12/04/22
            </Text>
            <View style={{paddingVertical: 8}} />
            <TouchableOpacity onPress={() => setVisible(true)}>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Ver Archivo PDF</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: 8}} />
        <View style={styles.cardContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000000',
            }}>
            Contrato de trabajo. Empleadores. Obligación de contar con espacios
            de cuidados para menores de 3 años
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
              <Text
                style={{
                  fontSize: 15,
                  color: '#000000',
                  fontWeight: '500',
                }}>
                Fecha:
              </Text>{' '}
              12/04/22
            </Text>
            <View style={{paddingVertical: 8}} />
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Ver Archivo PDF</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: 8}} />
        <View style={styles.cardContainer}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              color: '#000000',
            }}>
            Contrato de trabajo. Empleadores. Obligación de contar con espacios
            de cuidados para menores de 3 años
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
              <Text
                style={{
                  fontSize: 15,
                  color: '#000000',
                  fontWeight: '500',
                }}>
                Fecha:
              </Text>{' '}
              12/04/22
            </Text>
            <View style={{paddingVertical: 8}} />
            <TouchableOpacity>
              <View style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Ver Archivo PDF</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: 8}} />
      </ScrollView>
      <Modal visible={visible} animationType="slide" transparent={false}>
        <SafeAreaView style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => setVisible(false)}
            style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Cerrar</Text>
          </TouchableOpacity>

          <WebView
            source={{uri: googleViewerUrl}}
            style={styles.webview}
            javaScriptEnabled
            domStorageEnabled
            startInLoadingState
          />
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default DetallePublicacion;

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
    paddingBottom: 8,
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
  modalContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  closeButton: {
    backgroundColor: '#e74c3c',
    padding: 10,
    alignSelf: 'flex-end',
    margin: 10,
    borderRadius: 5,
    zIndex: 1,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  webview: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
});
