import styled from 'styled-components';

export const AboutSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 600px;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  position: relative;

  &::before {
    content: '';
    background: #3039c3 url('/bglogo.png') no-repeat right top / cover;
    position: absolute;
    background-blend-mode: screen;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
  }

  @media only screen and (max-width: 768px) {
    padding: 40px 0;
  }
`;

export const AboutSectionContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1240px;
  gap: 30px;
  position: relative;
  padding: 0 20px;

  @media only screen and (max-width: 768px) {
    gap: 18px;
  }
`;

export const AboutSectionTitle = styled.p`
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
    background: var(--text-color-black);
  }
`;

export const AboutSectionCard = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  color: var(--text-color-black);

  h1 {
    font-weight: 700;
    font-size: 2.5rem;
    line-height: 3rem;
    color: var(--primary-color);
    max-width: 160px;
    z-index: 1;
    strong {
      font-weight: 900;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    h1 {
      font-size: 2.2rem;
      max-width: 100%;
    }
  }
`;

export const CardAboutSession = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  top: -30px;
  left: -40px;
  border-radius: var(--border-radius-xxxl);
  padding: 60px 80px;
  background-color: rgba(249, 249, 249, 0.9);
  width: fit-content;
  height: 400px;
  gap: 70px;

  > p {
    padding-left: 40px;
    font-size: 1.15rem;
  }

  .results {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    height: 140px;

    .result {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 200px;

      h1 {
        font-size: 2.5rem;
        font-weight: 900;
        color: var(--text-color-black);
      }

      p {
        text-align: center;
        font-size: 1.3rem;
        font-weight: 700;
        line-height: 1.5rem;
        color: var(--text-color-black);
      }

      &.selected {
        background-color: var(--color-white);
        padding: 40px 20px;
        position: relative;
        top: 40px;
        height: 240px;
        border-radius: var(--border-radius-xxl);
        box-shadow: 0px 3.47395px 17.3698px rgba(0, 0, 0, 0.25);

        h1,
        p {
          color: var(--primary-color);
        }

        small {
          margin-top: 40px;

          font-size: 0.7rem;
          color: var(--text-color-black);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    gap: 20px;
    padding: 40px 28px;
    border-radius: var(--border-radius-xxl);
    width: 100%;
    left: 0;
    height: fit-content;

    > p {
      padding-left: 0;
      font-size: 1rem;
      line-height: 1rem;
    }

    .results {
      flex-wrap: wrap;
      height: 100%;

      .result {
        max-width: 160px;

        h1 {
          font-size: 1.8rem;
          line-height: 2rem;
        }
        p {
          font-size: 1rem;
          line-height: 1rem;
        }

        &.selected {
          border-radius: var(--border-radius-lg);
          padding: 12px 16px;
          height: 100%;
          top: 0;

          small {
            margin-top: 0;

            font-size: 0.7rem;
            color: var(--text-color-black);
          }
        }
      }
    }
  }
`;

export const AboutSectionCardUnidade = styled(AboutSectionCard)`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  gap: 40px;

  @media only screen and (max-width: 768px) {
    padding-top: 0;
    gap: 40px;
  }
`;

export const AboutSectionCardUnidadeContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;

    gap: 20px;
  }
`;

export const AboutSectionCardUnidadeContentItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;

  .icon-box {
    display: block;
    width: 100px;
    height: 100px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .description-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    max-width: 320px;

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color-black);
    }
    p {
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-color-black);
      line-height: 1.3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    align-items: center;

    gap: 20px;

    .icon-box {
      width: 60px;
      height: 60px;
    }

    .description-box {
    
      h2 {
      font-size: 1.4rem;
      line-height: 1.5rem;
    }

    p {
      font-size: 0.9rem;
      line-height: 1rem

    }
  }
`;
