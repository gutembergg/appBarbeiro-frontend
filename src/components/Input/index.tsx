import React, { FC, useState } from 'react';

import { SvgProps } from 'react-native-svg';

import { Container, InputText } from './styles';

interface IFormProps {
  iconSvg: FC<SvgProps>;
  placeholder: string;
  onChange: JSX.ElementAttributesProperty;
}

const Input: React.FC<IFormProps> = ({
  iconSvg: Icon,
  placeholder,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleFilled = () => {
    console.log('Focused');

    setIsFilled(true);
  };

  return (
    <Container isFilled={isFilled} isFocused={isFocused}>
      <Icon width="24" height="24" fill="#268596" />
      <InputText
        {...rest.onChange}
        underlineColorAndroid="transparent"
        onFocus={handleFocused}
        onBlur={handleFilled}
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
