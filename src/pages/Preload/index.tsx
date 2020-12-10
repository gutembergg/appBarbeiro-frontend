import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import Logo from '../../assets/barber.svg';

import { Container, LoadingPage } from './styles';

const Preload: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('@appBarbeiro:token');

      if (token) {
        //valider
      } else {
        navigation.navigate('SignIn');
      }
    };

    checkToken();
  }, [navigation]);

  return (
    <Container>
      <Logo width="100%" height="160" />
      <LoadingPage size="large" color="#fff" />
    </Container>
  );
};

export default Preload;
