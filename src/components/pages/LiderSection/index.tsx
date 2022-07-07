import { lidersMock } from '../../../utils/mocks';
import CardLider, { CardLiderProps } from '../../CardLider';
import Button from '../../UI/Button';
import { HelpButtonContainer } from '../HelpSection/style';
import {
  LiderSectionContainer,
  LiderSectionContent,
  LiderSectionContentCards,
  LiderSectionContentDescription,
  LiderSectionContentTitle,
  LiderSectionWrapper,
  LiderSectionItemDescription,
} from './style';

const LiderSection = () => {
  function renderLider() {
    return lidersMock.map((lider: CardLiderProps) => {
      return <CardLider key={lider.id} {...lider} />;
    });
  }

  return (
    <LiderSectionWrapper>
      <LiderSectionContainer>
        <LiderSectionContent>
          <LiderSectionContentDescription>
            <LiderSectionContentTitle>Nossos líderes</LiderSectionContentTitle>
            <h1>
              <strong>Mentoria</strong> de peso
            </h1>
            <LiderSectionItemDescription>
              <p>
                Além de contar com um time fera de mais de 30 pessoas, a
                assessoria de SEO da Netlinks nasceu (diferente de outras
                consultorias e agências) com uma missão clara de{' '}
                <strong>transformar o SEO no Brasil</strong> .
              </p>
              <p>
                São <strong>6 sócios</strong> com background formado em grandes
                empresas e que se juntaram para criar o produto de SEO ideal pra
                apoiar pequenas e médias empresas que contam com um time pequeno
                de marketing mas que sabem a importância de melhorar o tráfego
                orgânico.
              </p>
            </LiderSectionItemDescription>
          </LiderSectionContentDescription>
          <LiderSectionContentCards>{renderLider()}</LiderSectionContentCards>
        </LiderSectionContent>
        <HelpButtonContainer>
          <Button withShadow backgroundColor='#3333CC' textColor='white'>
            VAMOS CONVERSAR
          </Button>
        </HelpButtonContainer>
      </LiderSectionContainer>
    </LiderSectionWrapper>
  );
};

export default LiderSection;
