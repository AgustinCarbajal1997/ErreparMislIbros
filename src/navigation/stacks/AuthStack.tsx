import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Login/Login';
import SignUp from '../../screens/SignUp/SignUp';
import ResetPassword from '../../screens/ResetPassword/ResetPassword';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
