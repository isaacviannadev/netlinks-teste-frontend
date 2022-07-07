import { ReactNode } from 'react';
import CardWrapper from './style';

type CardProps = {
  children: ReactNode;
  color?: string;
  padding?: string;
  noShadow?: boolean;
};

const Card: React.FC<CardProps> = ({ noShadow, children, color, padding }) => {
  return (
    <CardWrapper color={color} noShadow={noShadow} padding={padding}>
      {children}
    </CardWrapper>
  );
};

export default Card;
