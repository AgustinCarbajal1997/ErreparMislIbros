import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/navigation';
import AuthStack from './src/navigation/stacks/AuthStack';
import {AuthProvider, useAuth} from './src/context/AuthContext';
import BootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AnimatedGifLoader from './src/components/AnimatedGifLoader';

const ContainerNavigator = () => {
  const {authData} = useAuth();
  const [animatedLoader, setAnimatedLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimatedLoader(false);
    }, 2000);
  }, []);

  if (animatedLoader) {
    return <AnimatedGifLoader />;
  }
  return (
    <NavigationContainer>
      {authData !== null ? <DrawerNavigation /> : <AuthStack />}
    </NavigationContainer>
  );
};

const AppNavigator = () => {
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

  return <ContainerNavigator />;
};

function App(): JSX.Element {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}

export default App;
