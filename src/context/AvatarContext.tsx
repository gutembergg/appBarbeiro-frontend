import React, { createContext, useReducer } from 'react';
import { initialState, UserReducer } from '../reducers/UserReducer';

// import { Container } from './styles';

interface IAvatar {
  state: typeof initialState;
  dispatch: Function;
}

export const AvatarContext = createContext<IAvatar>({} as IAvatar);

const AvatarProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  return (
    <AvatarContext.Provider value={{ state, dispatch }}>
      {children}
    </AvatarContext.Provider>
  );
};

export default AvatarProvider;
