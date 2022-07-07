import styled from 'styled-components';

export const MainSectionWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 800px;
  object-fit: cover;
  background: #ffffff url('/bgblue.png') no-repeat right top / cover;
  position: relative;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    max-height: 100%;
  }
`;

export const MainSectionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  min-height: 800px;
  gap: 1.5rem;
  max-width: 1240px;

  .left-section {
    display: flex;
    justify-content: center;

    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 20px;

    h3,
    p {
      max-width: 420px;
    }

    h3 {
      font-size: 2rem;
      line-height: 1.2;
    }

    p {
      font-size: 1.1rem;
      line-height: 150%;
    }

    .clientes-section {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 20px 0;
      gap: 26px;

      > p {
        max-width: 100%;
        font-size: 0.875rem;
        text-align: center;
        color: var(--secondary-color);
      }

      .clientes-list {
        display: flex;
        flex-direction: row;
        gap: 20px;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;

        .clientes-list-item {
          display: flex;
          gap: 12px;

          img {
            width: 60px;
            height: 60px;
          }

          .clientes-description {
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 100%;
            max-width: 160px;

            strong,
            p {
              font-size: 0.75rem;
              line-height: 1.2;
            }
          }
        }
      }
    }
  }

  .right-section {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    position: relative;

    .people-container {
      display: flex;
      align-items: center;
      justify-content: center;
      left: -20px;
      position: relative;
      width: 100%;
      img {
        width: 100%;
        height: auto;
      }
    }

    .form-section {
      display: flex;
      position: absolute;
      bottom: -40px;
    }
  }

  @media only screen and (max-width: 768px) {
    max-height: 100%;
    flex-direction: column;
    gap: 1rem;

    .left-section {
      gap: 16px;
      > img {
        width: 100%;
        height: auto;
        max-width: 300px;
      }

      h3 {
        font-size: 1.5rem;
        line-height: 1.2;
      }

      p {
        font-size: 1rem;
        line-height: 150%;
      }
      .clientes-section {
        gap: 16px;

        .clientes-list {
          gap: 10px;

          .clientes-list-item {
            align-items: center;
            gap: 8px;

            img {
              width: 46px;
              height: 46px;
            }

            .clientes-description {
              max-width: 140px;
              strong,
              p {
                font-size: 0.7rem;
              }
            }
          }
        }
      }
    }

    .right-section {
      .people-container {
        display: none;
      }
      .form-section {
        position: relative;
        justify-content: center;
        width: 100%;
        text-align: center;
        h2 {
          font-size: 1.3rem;
        }
      }
    }
  }
`;
