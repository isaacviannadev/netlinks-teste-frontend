import styled from 'styled-components';

export const LiderSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 600px;
  background-color: var(--color-white);
  align-items: center;
  justify-content: center;
  color: var(--text-color-black);

  @media only screen and (max-width: 768px) {
  }
`;

export const LiderSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  max-width: 1240px;
  gap: 60px;
  padding: 100px 20px;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const LiderSectionContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 40px;

  > div {
    flex: 1;
  }

  div + div {
    flex: 2;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LiderSectionContentTitle = styled.p`
  font-size: 1rem;
  width: 100%;
  max-width: fit-content;
  font-weight: bold;
  color: var(--text-color-black);
  position: relative;

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 3px;
    background: var(--primary-color);
  }
`;

export const LiderSectionContentDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 40px;

  h1 {
    font-weight: 700;
    font-size: 3rem;
    line-height: 3rem;
    max-width: 200px;
    strong {
      font-weight: 900;
    }
  }
`;

export const LiderSectionItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 360px;
  gap: 20px;
  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;

    p {
      font-size: 0.75rem;
    }
  }
`;

export const LiderSectionContentCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 60px 26px;
  padding-top: 30px;
`;
