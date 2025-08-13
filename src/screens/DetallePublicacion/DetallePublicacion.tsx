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
  Dimensions,
  FlatList,
  ActivityIndicator,
  Linking,
  Platform,
  StatusBar,
  Alert,
} from 'react-native';
import React, {Fragment, useCallback, useEffect, useRef, useState} from 'react';
import WebView from 'react-native-webview';
import {useRoute} from '@react-navigation/native';
import BASE_URL from '../../utils/url';
import {useAuth} from '../../context/AuthContext';
import SeparataCard from '../../components/SeparataCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {generatePreviewUrl} from '../../utils/generateUrl';
import {SafeAreaView} from 'react-native-safe-area-context';
import RNFS from 'react-native-fs';
import {PermissionsAndroid} from 'react-native';
import RNBlobUtil from 'react-native-blob-util';
import Share from 'react-native-share';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';

const DetallePublicacion = ({navigation}): JSX.Element => {
  const {authData} = useAuth();
  const route = useRoute();
  const {publicationId, title, ImageUrl} = route.params as {
    publicationId: number;
    title: string;
    ImageUrl: string;
  };
  const [visible, setVisible] = useState(false);
  const [modalUrl, setModalUrl] = useState('');
  const [separatas, setSeparatas] = useState([]);
  const [filterSeparatas, setFilterSeparatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const webviewRef = useRef(null);
  const [timer, setTimer] = useState(false);
  const [hasDownload, setHasDownload] = useState(false);

  const handleLoadEnd = () => {
    webviewRef.current.injectJavaScript(`
      (function() {
        if (document.body && document.body.innerHTML.trim() === "") {
          window.ReactNativeWebView.postMessage("blank");
        }
      })();
    `);
  };

  const handleMessage = event => {
    if (event.nativeEvent.data === 'blank') {
      console.log('WebView blank → reload');
      setTimer(true);
      setTimeout(() => {
        setTimer(false);
      }, 200);
    }
  };

  const getSeparatas = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}/Book/getBookDetails?publicationId=${publicationId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authData?.token,
          },
        },
      );
      const data = await response.json();
      const filterData = data?.filter(
        item => item?.fileUrl !== null || item?.videoUrl !== null,
      );
      setSeparatas(filterData);
      setFilterSeparatas(filterData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const onHandleFilterSeparatas = () => {
    const filteredPublicaciones = separatas.filter(item =>
      item.fileTitle?.toLowerCase().includes(searchText.toLowerCase()),
    );
    setFilterSeparatas(filteredPublicaciones);
  };

  useEffect(() => {
    onHandleFilterSeparatas();
  }, [searchText]);

  useEffect(() => {
    getSeparatas();
  }, []);

  const navigationGoBack = () => {
    navigation.goBack();
  };
  const downloadPdf2 = async () => {
    const url = 'https://example.com/archivo.pdf';
    const fileName = 'archivo.pdf';
    const destPath = `${RNFS.DocumentDirectoryPath}/${fileName}`;

    try {
      const downloadResult = await RNFS.downloadFile({
        fromUrl: url,
        toFile: destPath,
      }).promise;

      if (downloadResult.statusCode === 200) {
        console.log('PDF descargado en:', destPath);
        // Aquí puedes abrirlo con algún visor de PDFs
      } else {
        console.log('Error en la descarga:', downloadResult.statusCode);
      }
    } catch (error) {
      console.error('Error al descargar PDF:', error);
    }
  };
  const downloadDocumentIos = async (downloadData, item) => {
    const url = downloadData?.DownloadURL;
    const fileName = downloadData?.fileName;
    try {
      const path = `${RNBlobUtil.fs.dirs.DocumentDir}/${fileName}`;

      const res = await RNBlobUtil.config({
        path: path,
        fileCache: true,
      }).fetch('GET', url);

      console.log('Archivo descargado en:', res.path());
      Alert.alert('Éxito', 'Archivo descargado correctamente.');

      // Aquí podrías abrirlo con react-native-file-viewer, por ejemplo
      // FileViewer.open(res.path())
    } catch (error) {
      console.error('Error al descargar:', error);
      Alert.alert('Error', 'Ocurrió un error al descargar el archivo.');
    }
  };

  const downloadDocumentAndroid = async (downloadData, item) => {
    const url = downloadData?.DownloadURL;
    const fileName = downloadData?.fileName;
    let description;
    let mimeType;
    if (item?.fileUrl?.includes('.pdf')) {
      description = 'Descargando archivo PDF';
      mimeType = 'application/pdf';
    }
    if (item?.fileUrl?.includes('.xls')) {
      description = 'Descargando archivo Excel';
      mimeType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
    }
    if (item?.fileUrl?.includes('.doc')) {
      description = 'Descargando archivo DOC';
      mimeType = 'application/msword';
    }

    try {
      // PASO 1: pedir permisos en Android
      //if (Platform.OS === 'android') {
      //  const granted = await PermissionsAndroid.request(
      //    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      //    {
      //      title: 'Permiso de almacenamiento',
      //      message:
      //        'La app necesita acceso para guardar archivos en tu dispositivo.',
      //      buttonNeutral: 'Preguntar después',
      //      buttonNegative: 'Cancelar',
      //      buttonPositive: 'Aceptar',
      //    },
      //  );
      //
      //  if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
      //    Alert.alert(
      //      'Permiso denegado',
      //      'No se puede descargar el archivo sin permisos.',
      //    );
      //    return;
      //  }
      //}

      // PASO 2: iniciar la descarga
      const {dirs} = RNBlobUtil.fs;
      const downloadPath = `${dirs.DownloadDir}/${fileName}`;

      const res = await RNBlobUtil.config({
        addAndroidDownloads: {
          useDownloadManager: true, // ← activa DownloadManager
          notification: true, // ← muestra la notificación nativa
          title: fileName,
          path: downloadPath,
          description: description,
          mime: mimeType,
          mediaScannable: true,
        },
      }).fetch('GET', url);

      console.log('Archivo descargado en:', res.path());
      Alert.alert('Éxito', 'Archivo descargado correctamente.');
    } catch (error) {
      console.error('Error al descargar:', error);
      Alert.alert('Error', 'Ocurrió un error al descargar el archivo.');
    }
  };
  const onOpenModalUrl = item => {
    // si es pdf
    if (item?.fileUrl?.includes('.pdf')) {
      const fileData = generatePreviewUrl(item);

      if (Platform.OS === 'android') {
        setModalUrl(fileData?.URL);
        setVisible(true);
      } else {
        Linking.openURL(fileData?.DownloadURL);
      }

      if (hasDownload) {
        if (Platform.OS === 'android') {
          downloadDocumentAndroid(fileData, item);
        } else {
          //downloadDocumentIos(fileData, item);
        }
      }
    }
    // si es doc
    if (item?.fileUrl?.includes('.doc')) {
      const downloadData = generatePreviewUrl(item);
      //if (hasDownload) {
      //  if (Platform.OS === 'android') {
      //    downloadDocumentAndroid(downloadData, item);
      //  } else {
      //    downloadDocumentIos(downloadData, item);
      //  }
      //}
      if (Platform.OS === 'android') {
        setModalUrl(downloadData?.URL);
        setVisible(true);
      } else {
        Linking.openURL(downloadData?.DownloadURL);
      }

      return;
    }
    // si es excel
    if (item?.fileUrl?.includes('.xls')) {
      const downloadData = generatePreviewUrl(item);
      //if (hasDownload) {
      //  if (Platform.OS === 'android') {
      //    downloadDocumentAndroid(downloadData, item);
      //  } else {
      //    downloadDocumentIos(downloadData, item);
      //  }
      //}

      Linking.openURL(downloadData?.DownloadURL);

      return;
    }
    if (item?.videoUrl !== null) {
      Linking.openURL(item?.videoUrl);
      return;
    }
  };

  const downloadAndShare = async item => {
    const shareData = generatePreviewUrl(item);
    const url = shareData?.DownloadURL;
    const fileName = shareData?.fileName;
    try {
      // PASO 1: Definir ruta temporal
      const tempPath =
        Platform.OS === 'ios'
          ? `${RNFS.TemporaryDirectoryPath}${fileName}`
          : `${RNFS.CachesDirectoryPath}/${fileName}`;

      console.log('Archivo temporal:', tempPath);

      // PASO 2: Descargar archivo
      const downloadResult = await RNFS.downloadFile({
        fromUrl: url,
        toFile: tempPath,
      }).promise;

      if (downloadResult.statusCode === 200) {
        console.log('Archivo descargado en:', tempPath);

        // PASO 3: Compartir archivo
        const shareOptions = {
          title: 'Compartir archivo PDF',
          url: Platform.OS === 'android' ? `file://${tempPath}` : tempPath,
          type: 'application/pdf',
        };

        await Share.open(shareOptions);
        console.log('Archivo compartido.');

        // PASO 4: Borrar archivo después de compartir
        await RNFS.unlink(tempPath);
        console.log('Archivo temporal eliminado.');

        Alert.alert('Éxito', 'Archivo compartido y eliminado.');
      } else {
        console.log('Error en la descarga:', downloadResult.statusCode);
        Alert.alert('Error', 'No se pudo descargar el archivo.');
      }
    } catch (error) {
      //Alert.alert(
      //  'Error',
      //  'Ocurrió un error al descargar o compartir el archivo.',
      //);
    }
  };

  const hasToDownload = async () => {
    try {
      const value = await AsyncStorage.getItem('download');
      if (value !== null) {
        if (value === 'activado') {
          setHasDownload(true);
        } else {
          setHasDownload(false);
        }
      } else {
        setHasDownload(false);
      }
    } catch (e) {
      setHasDownload(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      hasToDownload();
    }, []),
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.containerIcon}>
        <TouchableOpacity activeOpacity={0.8} onPress={navigationGoBack}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={40}
            color="#00a88f"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>{title}</Text>
        <Image
          source={{
            uri: ImageUrl,
          }}
          style={styles.image}
        />
      </View>
      {loading === false && separatas?.length === 0 && (
        <View>
          <Text style={styles.textNoHaySeparatas}>
            ¡Tu libro está actualizado! A la fecha, no hay cambios normativos.
          </Text>
        </View>
      )}
      {loading === false && separatas?.length > 0 && (
        <View style={styles.containerSections}>
          <TextInput
            style={styles.inputText}
            placeholder="Buscar por título"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
      )}

      {loading ? (
        <ActivityIndicator size={25} color={'#00a88f'} />
      ) : (
        <>
          {separatas?.length > 0 && filterSeparatas?.length > 0 && (
            <>
              <ScrollView>
                {filterSeparatas?.map(item => (
                  <Fragment key={item.id.toString()}>
                    <SeparataCard
                      separata={item}
                      navigation={navigation}
                      onOpenModalUrl={() => onOpenModalUrl(item)}
                      onSharedDoc={() => downloadAndShare(item)}
                    />
                    <View style={{height: 16}} />
                  </Fragment>
                ))}
              </ScrollView>
            </>
          )}
          {separatas?.length > 0 && filterSeparatas?.length === 0 && (
            <>
              <Text style={{textAlign: 'center', marginTop: 20, color: '#888'}}>
                No hay publicaciones
              </Text>
            </>
          )}
        </>
      )}
      {visible && (
        <Modal visible={visible} animationType="slide">
          <SafeAreaView style={styles.modalContainer}>
            <TouchableOpacity
              onPress={() => setVisible(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
            {!timer && (
              <WebView
                ref={webviewRef}
                source={{uri: modalUrl}}
                onLoadEnd={handleLoadEnd}
                onMessage={handleMessage}
                javaScriptEnabled
                domStorageEnabled
                startInLoadingState
                style={styles.webview}
              />
            )}
          </SafeAreaView>
        </Modal>
      )}
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
    paddingHorizontal: 16,
    backgroundColor: '#ffffff90',
  },
  containerIcon: {
    width: '100%',
  },
  containerSections: {
    width: Dimensions.get('screen').width - 25,
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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
    paddingTop: Platform.OS === 'android' ? 0 : 44, // iOS notch height aproximado
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
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  textNoHaySeparatas: {
    fontWeight: '700',
    fontSize: 16,
    textAlign: 'center',
  },
});
