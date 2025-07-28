import jwtDecode from 'jwt-decode';
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import isExpired from '../utils/isExpiredToken';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  mail: string;
  id: number;
}
export interface AuthData {
  token: string;
  user: User;
}
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  authData: AuthData | null;
  onSetAuthDataHandler: (authData: AuthData) => void;
  onClouseSession: () => void;
}
// ejemplo vencido: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hZ3VzdGluY2FyYmFqYWw5N0BnbWFpbC5jb20iLCJuYmYiOjE3NTI2ODY0MTAsImV4cCI6MTc1MjY5MjQxMCwiaWF0IjoxNzUyNjg2NDEwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM0OC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM0OC8ifQ.SI6cj2Tw6G-qrn0HiJRBU6GWA_dNPPXsA92k6Xpw_s4
const ejemploToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hZ3VzdGluY2FyYmFqYWw5N0BnbWFpbC5jb20iLCJuYmYiOjE3NTM0NjQ0NjQsImV4cCI6MTc1MzQ3MDQ2NCwiaWF0IjoxNzUzNDY0NDY0LCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM0OC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM0OC8ifQ.KBl3LS-0iNqnHXCvny4wi54qRmY0i3gz8AJs8txVfKQ';
const ejemploUser: User = {
  mail: 'Magustincarbajal97@gmail.com',
  id: 10688,
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authData, setAuthData] = useState<AuthData | null>(null); // volver a null

  const onSetAuthDataHandler = async (userLoginData: AuthData) => {
    setAuthData(userLoginData);
    await AsyncStorage.setItem('token', userLoginData?.token);
    await AsyncStorage.setItem('mail', userLoginData?.user?.mail);
    await AsyncStorage.setItem('id', `${userLoginData?.user?.id}`);
  };

  const onClouseSession = async () => {
    setAuthData(null);
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('mail');
    await AsyncStorage.removeItem('id');
  };

  const hasToken = async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      const mail = await AsyncStorage.getItem('mail');
      const id = await AsyncStorage.getItem('id');
      console.log(token, mail, id);
      if (token === null) {
        setAuthData(null);
      }
      if (token !== null) {
        if (isExpired(jwtDecode(token))) {
          console.log('El token está expirado');
          setAuthData(null);
          await AsyncStorage.removeItem('token');
          await AsyncStorage.removeItem('mail');
          await AsyncStorage.removeItem('id');
        } else {
          console.log('El token aún es válido');
          if (mail === null || id === null) return;
          const user: User = {
            mail: mail,
            id: Number(id),
          };
          setAuthData({
            token: token,
            user: user,
          });
        }
      }
    } catch (e) {
      console.error('Error al leer:', e);
    }
  };
  useEffect(() => {
    hasToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        authData,
        onSetAuthDataHandler,
        onClouseSession,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
