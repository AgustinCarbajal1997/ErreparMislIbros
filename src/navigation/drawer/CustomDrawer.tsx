import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAuth} from '../../context/AuthContext';

export default function CustomDrawerContent(props) {
  const {setIsAuthenticated} = useAuth();

  const handleLogout = () => {
    setIsAuthenticated(false); // ⬅️ Volvés al AuthStack
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
