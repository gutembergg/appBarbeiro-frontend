import React from 'react';

import Routes from './routes/routes';
import AppProvider from './context';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;
