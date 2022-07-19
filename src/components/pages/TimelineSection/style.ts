import styled from 'styled-components';

export const TimelineSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 120px 0;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
  color: black;

  @media only screen and (max-width: 768px) {
    padding: 60px 0;
  }
`;

export const TimelineSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  max-width: 1240px;
  gap: 60px;
  position: relative;

  .buttonNavigation {
    display: flex;
    width: 46px;
    height: 46px;
    border: 4px solid #fd645f;
    background: white;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    bottom: -23px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    z-index: 3;
  }

  .dotsGroup {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    width: 32px;
    height: fit-content;
    position: absolute;
    right: -60px;
    top: 50%;
    transform: translateY(-50%);

    & .dot {
      display: flex;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #d9d9d9;

      &.active {
        background: #fd645f;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    gap: 40px;

    & .dotsGroup {
      display: none;
    }
  }
`;

export const TimelineCategory = styled.div`
  font-size: 12px;
  position: relative;
  strong {
    color: black !important;
  }

  &::before {
    content: '';
    display: block;
    width: 4px;
    height: 100%;
    background-color: #fd645f;
    position: absolute;
    left: -10px;
  }
`;

export const TimelineSectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  font-size: 2rem;
  font-weight: normal;
  gap: 16px;
  width: 100%;
  strong {
    color: hsla(203, 70%, 36%, 1);
  }
`;

export const TimelineListItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 900px;
  overflow: hidden;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  min-height: 300px;

  .left,
  .right {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0px 16px;
    gap: 60px;
    position: relative;

    img {
      margin-top: 20px;
      width: 100%;
      height: auto;
      max-width: 400px;
    }

    .lineTopLeft,
    .lineTopRight {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #293953;
      top: 36px;
      z-index: 1;
    }

    .lineTopLeft {
      right: -28px;
    }
    .lineTopRight {
      left: -28px;
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

    .checkpoint {
      display: block;
      position: absolute;
      width: 32px;
      height: 32px;
      background-color: white;
      border: 4px solid #fd645f;
      border-radius: 50%;
      top: 20px;
      z-index: 2;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: row;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 16px 0;

    &:nth-child(1) .left,
    &:nth-child(3) .left,
    &:nth-child(7) .left {
      display: none;
    }
    &:nth-child(2) .right,
    &:nth-child(6) .right {
      display: none;
    }

    .left,
    .right {
      gap: 20px;
      align-items: center;
      justify-content: center;

      .lineTopLeft,
      .lineTopRight {
        display: none;
      }
    }

    .left {
      text-align: center;
    }

    .divider {
      display: none;
    }
  }
`;

export const TimelineItemTitle = styled.div`
  padding: 0px 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const TimelineItemDescription = styled.div`
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

export const TimelineImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 16px;

  img.b3 {
    height: 100%;
    width: auto;
    max-height: 200px;
  }
`;

export const TimelineButtonContainer = styled.div`
  display: flex;
  width: 380px;
`;

export const TimelineHeader = styled.div`
  margin-top: 18px;
`;
