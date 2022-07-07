import styled from 'styled-components';

export const CardLiderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;

  background-color: var(--color-white);
  box-shadow: 0px 2.76628px 11.7567px rgba(0, 0, 0, 0.25);
  border-radius: 58px;
`;

export const CardLiderAvatar = styled.div`
  display: flex;
  position: absolute;
  top: -46px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--primary-color);
`;

export const CardLiderContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
  height: 100%;

  padding: 40px 20px 20px;
`;

export const CardLiderHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  > p {
    font-weight: 700;
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
  p + p {
    font-weight: 400;
    font-size: 0.9rem;
    line-height: 1.1rem;
  }
`;

export const CardLiderInfo = styled.div`
  display: flex;
  flex-direction: column;

  > p {
    font-weight: 400;
    font-size: 0.6rem;
    line-height: 0.8rem;
  }
`;
export const CardLiderFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: flex-end;

  a {
    appearance: none;
    text-decoration: none;
    cursor: pointer;

    .social {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      border-radius: var(--border-radius-md);
      border: 2px solid var(--primary-color);
      padding: 6px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
