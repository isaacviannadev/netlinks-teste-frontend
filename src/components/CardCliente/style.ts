import styled from 'styled-components';

export const CardClienteWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  color: var(--text-color-black);

  &:nth-child(even) {
    background: #fff;
  }
`;

export const CardClienteContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 20px;
  padding: 40px 20px;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
`;

export const CardClienteContentHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-width: 600px;
  gap: 20px;
  background: transparent;

  .logo-box {
    display: flex;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--primary-color);

    img {
      width: 160px;
      height: 160px;
    }
  }

  .info-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    gap: 14px;
    text-align: center;

    h2 {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 2rem;
    }
    > p {
      background: none;
      font-size: 1rem;
      font-weight: 400;
      color: var(--text-color-black);
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    gap: 6px;

    .logo-box {
      img {
        width: 100px;
        height: 100px;
      }
    }

    .info-box {
      gap: 10px;

      h2 {
        font-size: 1.5rem;
      }

      > p {
        font-size: 0.9rem;
        line-height: 1rem;
      }
    }
  }
`;

export const CardClienteContentDetail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 40px;

  .left-cliente,
  .right-cliente {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    gap: 20px;
  }

  .left-cliente {
    > div {
      width: 548px;
      height: 425px;
    }

    @media only screen and (max-width: 768px) {
      display: none;
    }
  }
  .right-cliente {
    > p {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--text-color-gray);

      strong {
        font-weight: 700;
      }
    }

    strong {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--text-color-dark);
    }

    h1 {
      font-size: 3rem;
      font-weight: 900;
      color: var(--primary-color);
      line-height: 1.5rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .divider {
      width: 200px;
      height: 3px;
      background: var(--secondary-color);
    }

    p.destaque {
      font-size: 1.2rem;
      font-weight: 400;
      color: var(--secondary-color);

      strong {
        font-weight: 700;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .right-cliente {
      padding: 0 4px;
      gap: 6px;
      > p {
        font-size: 0.9rem;
        line-height: 1.1rem;
      }

      h1 {
        font-size: 2.5rem;
      }

      h3 {
        font-size: 1.2rem;
      }

      p.destaque {
        font-size: 1rem;
      }
    }
  }
`;
