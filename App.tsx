import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/navigation';
import AuthStack from './src/navigation/stacks/AuthStack';
import {AuthProvider, useAuth} from './src/context/AuthContext';
import BootSplash from 'react-native-bootsplash';

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
