/* eslint-disable curly */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import formatDate from '../utils/formatDate';
import Ionicons from 'react-native-vector-icons/Ionicons';

function SeparataCard({separata, navigation, onOpenModalUrl, onSharedDoc}) {
  const getText = () => {
    if (separata?.fileUrl?.includes('.pdf')) return 'Ver Archivo PDF';
    if (separata?.fileUrl?.includes('.xlsm')) return 'Descargar Archivo';
    if (separata?.fileUrl?.includes('.doc')) return 'Descargar Archivo';
    if (separata?.videoUrl !== null) return 'Ver Video';
  };

  const getTitle = () => {
    if (separata?.fileUrl?.includes('.pdf')) return separata?.fileTitle;
    if (separata?.fileUrl?.includes('.xlsm')) return separata?.fileTitle;
    if (separata?.fileUrl?.includes('.doc')) return separata?.fileTitle;
    if (separata?.videoUrl !== null) return separata?.videoTitle;
  };

  return (
    <View style={styles.cardContainer}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '500',
          color: '#000000',
        }}>
        {getTitle()}
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
        <View style={styles.containerShare}>
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
            {formatDate(separata?.fecha)}
          </Text>
          <TouchableOpacity onPress={onSharedDoc}>
            <View>
              <Ionicons name="share-social" size={26} color="#00a88f" />
            </View>
          </TouchableOpacity>
        </View>

        <View style={{paddingVertical: 8}} />
        <TouchableOpacity onPress={onOpenModalUrl}>
          <View style={styles.buttonContainer}>
            <Text style={styles.buttonText}>{getText()}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SeparataCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: Dimensions.get('window').width - 25,
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
  containerShare: {
    width: 300,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 20,
  },
});
