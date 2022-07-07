import styled from 'styled-components';

type CardProps = {
  color?: string;
  padding?: string;
  noShadow?: boolean;
};

const CardWrapper = styled.div<CardProps>`
  border-radius: var(--border-radius-xl);
  padding: ${(props) => props.padding || '20px'};
  box-shadow: ${({ noShadow }) =>
    noShadow ? 'none' : '0px 2px 11px rgba(0, 0, 0, 0.25)'};
  background-color: ${({ color }) => color || 'var(--color-white)'};
  width: fit-content;
`;

export default CardWrapper;
