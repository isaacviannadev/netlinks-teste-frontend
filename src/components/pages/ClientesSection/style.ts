import styled from 'styled-components';

export const ClientesSectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const ClientesSectionHeader = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background: var(--primary-color);
  padding: 60px 0;
  @media only screen and (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export const ClientesSectionTitle = styled.p`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  gap: 16px;

  strong {
    font-size: 3rem;
    position: relative;
    color: var(--secondary-color);
    font-weight: 900;
  }

  @media only screen and (max-width: 768px) {
    white-space: normal;

    font-size: 1.5rem;
    gap: 8px;
    strong {
      font-size: 1.8rem;
    }
  }
`;

export const ClientesSectionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
