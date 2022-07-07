import styled from 'styled-components';

interface ButtonProps {
  textColor?: string;
  backgroundColor?: string;
  withShadow?: boolean;
}

const ButtonSC = styled.button<ButtonProps>`
  width: 100%;
  height: 48px;
  padding: 8px 16px;

  border-radius: var(--border-radius-xl);
  border: none;
  font-family: 'Roboto', sans-serif;

  color: ${({ textColor }) => textColor || 'var(--text-color-primary)'};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || 'var(--secondary-color)'};

  box-shadow: ${({ withShadow }) =>
    (withShadow &&
      '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.2)') ||
    'none'};

  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(0.87);
  }
`;

export default ButtonSC;
