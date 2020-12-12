import React from 'react';

import Logo from '../../assets/barber.svg';
import Input from '../../components/Input';
import EmailIcon from '../../assets/email.svg';
import Lock from '../../assets/lock.svg';

import {
  Container,
  InputArea,
  CustomButton,
  CustonButtonText,
  LinkMessageText,
  MessageText,
} from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo width="100%" height="160" />
      <InputArea>
        <Input iconSvg={EmailIcon} />
        <Input iconSvg={Lock} />

        <CustomButton>
          <CustonButtonText>hiuhiuhi</CustonButtonText>
        </CustomButton>

        <LinkMessageText>
          <MessageText>text 1</MessageText>
          <MessageText>text bold</MessageText>
        </LinkMessageText>
      </InputArea>
    </Container>
  );
};

export default SignIn;
