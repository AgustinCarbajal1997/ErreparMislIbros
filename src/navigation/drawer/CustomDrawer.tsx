import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useAuth} from '../../context/AuthContext';
import BASE_URL from '../../utils/url';

export default function CustomDrawerContent(props) {
  const {onClouseSession, authData} = useAuth();

  const handleLogout = () => {
    onClouseSession(); // ⬅️ Volvés al AuthStack
  };
  const deleteAccount = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/User/InactiveUser?email=${authData?.user?.mail}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: authData?.token,
          },
        },
      );
      const data = await response.json();
      if (data === 'El usuario ha sido deshabilitado') {
        onClouseSession();
      }
    } catch (error) {
      console.log('Ocurrio un error', error);
    }
  };

  const confirmDelete = () => {
    Alert.alert(
      '¿Eliminar cuenta?',
      'Estás a punto de eliminar tu cuenta. Esta acción no se puede deshacer.',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Aceptar',
          onPress: () => {
            deleteAccount();
          },
          style: 'destructive',
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../images/erreparlogo.png')} // ← colocá tu logo aquí
          style={styles.logo}
        />
      </View>
      <DrawerItemList {...props} />
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={confirmDelete}>
          <Text style={[styles.logoutText, {color: 'red'}]}>
            Eliminar cuenta
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Cerrar sesión</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  logo: {
    width: '80%',
    height: 60,
    resizeMode: 'contain',
  },
  logoutContainer: {
    marginTop: 'auto',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  logoutText: {
    color: '#00a88f',
    fontSize: 16,
    fontWeight: '600',
  },
});
