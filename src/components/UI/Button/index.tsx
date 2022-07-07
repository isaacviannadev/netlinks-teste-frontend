import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import ButtonSC from './style';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  textColor?: string;
  backgroundColor?: string;
  withShadow?: boolean;
}

const Button: FC<ButtonProps> = (
  { children, textColor, backgroundColor, withShadow },
  props
) => {
  return (
    <ButtonSC
      textColor={textColor}
      backgroundColor={backgroundColor}
      withShadow={withShadow}
      {...props}
    >
      {children}
    </ButtonSC>
  );
};

export default Button;
