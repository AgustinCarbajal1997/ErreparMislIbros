import React, {createContext, useContext, useState, ReactNode} from 'react';

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

const ejemploToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im1hZ3VzdGluY2FyYmFqYWw5N0BnbWFpbC5jb20iLCJuYmYiOjE3NTI2ODY0MTAsImV4cCI6MTc1MjY5MjQxMCwiaWF0IjoxNzUyNjg2NDEwLCJpc3MiOiJodHRwczovL2xvY2FsaG9zdDo0NDM0OC8iLCJhdWQiOiJodHRwczovL2xvY2FsaG9zdDo0NDM0OC8ifQ.SI6cj2Tw6G-qrn0HiJRBU6GWA_dNPPXsA92k6Xpw_s4';
const ejemploUser: User = {
  mail: 'Magustincarbajal97@gmail.com',
  id: 10688,
};
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children}: {children: ReactNode}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authData, setAuthData] = useState<AuthData | null>({
    token: ejemploToken,
    user: ejemploUser,
  }); // volver a null

  const onSetAuthDataHandler = (userLoginData: AuthData) => {
    setAuthData(userLoginData);
  };

  const onClouseSession = () => {
    setAuthData(null);
  };

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
