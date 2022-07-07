import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 12px;
  padding: 16px;

  h2 {
    color: var(--text-color-primary);
    margin-bottom: 12px;
  }
`;

export default FormContainer;
