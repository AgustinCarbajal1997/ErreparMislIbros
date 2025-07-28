import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/navigation';
import AuthStack from './src/navigation/stacks/AuthStack';
import {AuthProvider, useAuth} from './src/context/AuthContext';
import BootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppNavigator = () => {
  const {authData} = useAuth();
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  useEffect(() => {
    loadDownloadStatus();
  }, []);

  const loadDownloadStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('download');
      if (value === null) {
        await AsyncStorage.setItem('download', 'desactivado');
      }
    } catch (e) {
      console.error('Error al leer:', e);
    }
  };

  return (
    <NavigationContainer>
      {authData !== null ? <DrawerNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

function App(): JSX.Element {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

export default App;
