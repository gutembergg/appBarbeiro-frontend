import React, { useState, useContext, useCallback } from 'react';

import Logo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import Lock from '../../assets/lock.svg';

import {
  Container,
  InputArea,
  InputContainer,
  InputText,
  CustomButton,
  CustonButtonText,
  LinkMessageText,
  MessageText,
} from './styles';
import { AuthContext } from '../../context/UserContext';
import { AvatarContext } from '../../context/AvatarContext';

import { useNavigation } from '@react-navigation/native';

const SignIn: React.FC = () => {
  const { signInDev } = useContext(AuthContext);
  const { dispatch: userDispatch } = useContext(AvatarContext);
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(async () => {
    try {
      await signInDev({
        email,
        password,
      });

      userDispatch({
        type: 'set_avatar',
        payload: {
          avatar: './assets/star.svg',
        },
      });
      navigation.reset({
        routes: [{ name: 'TabRoutes' }],
      });
    } catch (err) {
      console.log(err);
    }
  }, [email, password, signInDev, navigation, userDispatch]);

  const handleLink = () => {
    navigation.reset({
      routes: [{ name: 'Home' }],
    });
  };

  /*  const onChangeText = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ): void => {
    const value = e.nativeEvent.text;
  }; */

  return (
    <Container>
      <Logo width="100%" height="160" />
      <InputArea>
        <InputContainer>
          <EmailIcon width="24" height="24" fill="#268596" />
          <InputText
            onChangeText={(text) => setEmail(text)}
            placeholder="Email"
          />
        </InputContainer>

        <InputContainer>
          <Lock width="24" height="24" fill="#268596" />
          <InputText
            onChangeText={(text) => setPassword(text)}
            placeholder="Password"
          />
        </InputContainer>

        <CustomButton onPress={handleSubmit}>
          <CustonButtonText>Valider</CustonButtonText>
        </CustomButton>

        <LinkMessageText onPress={handleLink}>
          <MessageText>text 1</MessageText>
          <MessageText>text bold</MessageText>
        </LinkMessageText>
      </InputArea>
    </Container>
  );
};

export default SignIn;
