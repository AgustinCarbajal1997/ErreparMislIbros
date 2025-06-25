import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigation from './src/navigation/navigation';
import AuthStack from './src/navigation/stacks/AuthStack';
import {AuthProvider, useAuth} from './src/context/AuthContext';

const AppNavigator = () => {
  const {isAuthenticated} = useAuth();

  return (
    <NavigationContainer>
      {isAuthenticated ? <DrawerNavigation /> : <AuthStack />}
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
