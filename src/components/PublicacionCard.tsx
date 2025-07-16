import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function PublicacionCard({publicacion, navigation}) {
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('DetallePublicacion', {
            publicationId: publicacion?.id,
            ImageUrl: publicacion?.ImageUrl,
            title: publicacion?.title,
          })
        }>
        <View style={styles.cardView}>
          <Image
            source={{
              uri: publicacion?.ImageUrl,
            }}
            style={styles.image}
          />
          <Text style={styles.textCard}>{publicacion?.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default PublicacionCard;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#fff',
    width: Dimensions.get('screen').width - 25,
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardView: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
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
});
