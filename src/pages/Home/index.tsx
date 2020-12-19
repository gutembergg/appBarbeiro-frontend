import React from 'react';
import { useContext } from 'react';
import { View, Text } from 'react-native';

import { AvatarContext } from '../../context/AvatarContext';

// import { Container } from './styles';

const Home: React.FC = () => {
  const { state: user } = useContext(AvatarContext);

  console.log(user);

  return (
    <View>
      <Text>{user.avatar}</Text>
    </View>
  );
};

export default Home;
