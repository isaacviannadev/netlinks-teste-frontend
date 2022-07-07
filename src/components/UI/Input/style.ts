import styled from 'styled-components';

interface InputProps {
  error?: boolean;
}

const InputSC = styled.input<InputProps>`
  width: 100%;
  height: 42px;
  padding: 8px 24px;
  border: 1px solid ${({ error }) => (error ? 'red' : `var(--border-color)`)};
  border-radius: var(--border-radius-xl);
  color: var(--text-color-primary);

  ::placeholder {
    color: var(--text-color-gray);
  }
`;

export default InputSC;
