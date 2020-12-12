import React, { FC, useState } from 'react';

import { SvgProps } from 'react-native-svg';

import { Container, InputText } from './styles';

interface IProps {
  iconSvg: FC<SvgProps>;
}

const Input: React.FC<IProps> = ({ iconSvg: Icon, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleFilled = () => {
    setIsFilled(true);
  };

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <Icon width="24" height="24" fill="#268596" />
      <InputText {...rest} onFocus={handleFocused} onBlur={handleFilled} />
    </Container>
  );
};

export default Input;
