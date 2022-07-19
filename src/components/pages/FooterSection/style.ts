import styled from 'styled-components';

export const FooterSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 600px;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--primary-color);

  &::before {
    content: '';
    background: var(--primary-color) url('/pattern.png') repeat center;
    background-size: 60px;
    background-blend-mode: scree;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.1;
  }
`;

export const FooterSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  max-width: 1240px;
  gap: 30px;
  position: relative;
  padding: 0 20px;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterSectionForm = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  max-width: 1240px;
  gap: 30px;

  img {
    margin-top: -80px;
    width: 100%;
    height: auto;
    max-width: 600px;

    @media only screen and (max-width: 768px) {
      margin-top: -40px;

      max-width: 400px;
    }
  }
`;

export const FooterSectionTitle = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  max-width: 100px;
  gap: 16px;

  p {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 2.2rem;
  }

  strong {
    font-size: 3.2rem;
    color: var(--secondary-color);
    font-weight: 900;
    line-height: 2.8rem;
  }

  @media only screen and (max-width: 768px) {
    gap: 8px;

    strong {
      font-size: 2.5rem;
    }
  }
`;
