import React, { createContext, useCallback, useState } from 'react';
import IAuthCredentials from '../interfaces/IAuthCredentials';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../services/api';

interface IUser {
  name: string;
  email: string;
  id: string;
  created_at: Date | string;
  updated_at: Date | string;
}

interface IContextState {
  user: IUser;
  signInDev(authCredentials: IAuthCredentials): Promise<void>;
}

interface IAuthState {
  token: string;
  user: IUser;
}

export const AuthContext = createContext<IContextState>({} as IContextState);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>({} as IAuthState);

  const locaStorage = async () => {
    const token = await AsyncStorage.getItem('@ProjectManager:token');
    const user = await AsyncStorage.getItem('@ProjectManager:user');

    if (token && user) {
      setData({ token, user: JSON.parse(user) });
    }

    return {} as IAuthState;
  };
  locaStorage();

  const signInDev = useCallback(async (authCredentials: IAuthCredentials) => {
    const response = await api.post('/auth', authCredentials);

    const { token, user } = response.data;

    AsyncStorage.setItem('@ProjectManager:token', token);
    AsyncStorage.setItem('@ProjectManager:user', JSON.stringify(user));

    setData({
      token,
      user,
    });
  }, []);

  return (
    <AuthContext.Provider value={{ signInDev, user: data.user }}>
      {children}
    </AuthContext.Provider>
  );
};
