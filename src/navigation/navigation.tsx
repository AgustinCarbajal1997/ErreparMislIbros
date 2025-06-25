import {Image} from 'react-native';
import React from 'react';
import CustomDrawerContent from './drawer/CustomDrawer';
import PublicacionesStack from './stacks/PublicacionesStack';
import ActivarLibro from '../screens/ActivarLibro/ActivarLibro';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DescargaContenido from '../screens/DescargaContenido/DescargaContenido';
import TyC from '../screens/TyC/TyC';
import Contacto from '../screens/Contacto/Contacto';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Mis Publicaciones"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTintColor: '#00a88f',
        drawerActiveBackgroundColor: '#e0f7f4', // color más claro del #00a88f
        drawerActiveTintColor: '#00a88f', // texto seleccionado
        drawerInactiveTintColor: '#000000', // texto sin seleccionar
        drawerInactiveBackgroundColor: '#ffffff', // fondo sin seleccionar (opcional)
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}>
      <Drawer.Screen
        name="Mis Publicaciones"
        component={PublicacionesStack}
        options={{
          headerTitle: () => (
            <Image
              source={require('../images/logo_new.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          ),
          headerTitleAlign: 'center', // 👈 centra la imagen
        }}
      />
      <Drawer.Screen
        name="Activar libro"
        component={ActivarLibro}
        options={{
          headerTitle: () => (
            <Image
              source={require('../images/logo_new.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          ),
          headerTitleAlign: 'center', // 👈 centra la imagen
        }}
      />
      <Drawer.Screen
        name="Descargar Contenido"
        component={DescargaContenido}
        options={{
          headerTitle: () => (
            <Image
              source={require('../images/logo_new.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          ),
          headerTitleAlign: 'center', // 👈 centra la imagen
        }}
      />
      <Drawer.Screen
        name="Términos y condiciones"
        component={TyC}
        options={{
          headerTitle: () => (
            <Image
              source={require('../images/logo_new.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          ),
          headerTitleAlign: 'center', // 👈 centra la imagen
        }}
      />
      <Drawer.Screen
        name="Contactanos"
        component={Contacto}
        options={{
          headerTitle: () => (
            <Image
              source={require('../images/logo_new.png')}
              style={{width: 30, height: 30, resizeMode: 'contain'}}
            />
          ),
          headerTitleAlign: 'center', // 👈 centra la imagen
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
