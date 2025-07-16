/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import BASE_URL from '../../utils/url';
import {useAuth} from '../../context/AuthContext';
import PublicacionCard from '../../components/PublicacionCard';
import {useFocusEffect} from '@react-navigation/native';

const Publicaciones = ({navigation}): JSX.Element => {
  const {authData} = useAuth();
  const [publicaciones, setPublicaciones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  const filteredPublicaciones = publicaciones.filter(item =>
    item.title?.toLowerCase().includes(searchText.toLowerCase()),
  );
  const getPublicaciones = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${BASE_URL}/Book/getBooks?userid=${authData?.user?.id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authData?.token,
          },
        },
      );
      const data = await response.json();
      setPublicaciones(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  useFocusEffect(
    useCallback(() => {
      getPublicaciones();
      console.log('Pantalla se enfoca');
      return () => {
        console.log('Pantalla se desenfoca');
        // Cleanup si necesitás
      };
    }, []),
  );

  return (
    <View style={styles.screenContainer}>
      <View style={styles.containerScreen}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Mis publicaciones</Text>
        </View>
        <View style={styles.containerSections}>
          <TextInput
            style={styles.inputText}
            placeholder="Buscar por publicación"
            value={searchText}
            onChangeText={text => setSearchText(text)}
          />
        </View>
        {loading ? (
          <ActivityIndicator size={25} color={'#00a88f'} />
        ) : (
          <FlatList
            removeClippedSubviews={false}
            data={filteredPublicaciones}
            keyExtractor={item => item.id.toString()}
            renderItem={({item}) => (
              <PublicacionCard publicacion={item} navigation={navigation} />
            )}
            ItemSeparatorComponent={() => <View style={{height: 16}} />}
            contentContainerStyle={{
              paddingBottom: 100, // ajustá el valor a tu necesidad
            }}
            ListEmptyComponent={
              <Text style={{textAlign: 'center', marginTop: 20, color: '#888'}}>
                No hay publicaciones
              </Text>
            }
          />
        )}
      </View>
    </View>
  );
};

export default Publicaciones;

const styles = StyleSheet.create({
  screenContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff90',
  },
  containerScreen: {
    width: '95%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
