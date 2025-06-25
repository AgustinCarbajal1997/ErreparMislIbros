import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Publicaciones from '../../screens/Publicaciones/Publicaciones';
import DetallePublicacion from '../../screens/DetallePublicacion/DetallePublicacion';

const Stack = createNativeStackNavigator();

export default function PublicacionesStack() {
  return (
    <Stack.Navigator initialRouteName="PublicacionesHome">
      <Stack.Screen
        name="PublicacioneHome"
        component={Publicaciones}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetallePublicacion"
        component={DetallePublicacion}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
