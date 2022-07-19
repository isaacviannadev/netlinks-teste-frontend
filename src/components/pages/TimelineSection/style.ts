import styled from 'styled-components';

export const HelpSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 120px 0;
  background-color: var(--primary-color);
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const HelpSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  gap: 60px;

  @media only screen and (max-width: 768px) {
    gap: 40px;
  }
`;

export const HelpSectionTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  gap: 16px;

  strong {
    font-size: 3rem;
    position: relative;
    color: var(--secondary-color);

    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 3px;
      background-color: var(--text-color-black);
      position: absolute;
      bottom: 5px;
    }
  }
`;

export const HelpListItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const HelpItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 480px;

  .left,
  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0px 16px;
    gap: 60px;

    img {
      margin-top: 20px;
      width: 100%;
      height: auto;
      max-width: 400px;
    }
  }

  .left {
    align-items: flex-end;
    text-align: right;
  }

  .divider {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    height: 100%;
    position: relative;

    img {
      width: 42px;
      height: auto;
      position: absolute;
      top: 0;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .line {
      width: 4px;
      height: 100%;
      background-color: var(--text-color-black);
    }

    .end {
      display: block;
      position: absolute;
      width: 20px;
      height: 20px;
      background-color: var(--secondary-color);
      border-radius: 50%;
      bottom: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;

    padding: 16px 0;

    &:nth-child(2),
    &:nth-child(4) {
      flex-direction: column-reverse;
    }

    .left,
    .right {
      gap: 20px;
      align-items: center;
      justify-content: center;

      img {
        margin: 0 0 20px;
        max-width: 220px;
      }
    }

    .left {
      text-align: center;
    }

    .divider {
      position: absolute;
      left: 3px;

      img {
        left: -12px;
      }
    }
  }
`;

export const HelpItemTitle = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const HelpItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 540px;
  padding: 0px 16px;
  p {
    font-size: 1rem;
    font-weight: 400;
  }

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0;

    p {
      font-size: 0.75rem;
    }
  }
`;

export const HelpButtonContainer = styled.div`
  display: flex;
  width: 380px;
`;
