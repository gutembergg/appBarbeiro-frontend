import React from 'react';
import AvatarProvider from './AvatarContext';
import { AuthProvider } from './UserContext';

const AppProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <AvatarProvider>{children}</AvatarProvider>
    </AuthProvider>
  );
};

export default AppProvider;
