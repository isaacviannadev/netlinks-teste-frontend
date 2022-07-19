import {
  AboutSectionCard,
  AboutSectionCardUnidade,
  AboutSectionCardUnidadeContent,
  AboutSectionCardUnidadeContentItem,
  AboutSectionContent,
  AboutSectionTitle,
  AboutSectionWrapper,
  CardAboutSession,
} from './style';

import LocationIcon from '/btnLocation.png';

const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <AboutSectionContent>
        <AboutSectionTitle>Quem somos</AboutSectionTitle>
        <AboutSectionCard>
          <h1>
            <strong>Sobre</strong> a Netlinks
          </h1>
          <CardAboutSession>
            <p>
              Somos uma agência especializada em SEO, apaixonada em ajudar
              empresas a venderem mais no Google, através de metodologia
              comprovada, pessoas criativas e foco em resultados
            </p>

            <div className='results'>
              <div className='result'>
                <h1>80</h1>
                <p>casos de sucesso</p>
              </div>
              <div className='result selected'>
                <h1>30</h1>
                <p>colaboradores dedicados</p>
                <small>Sem freelancers</small>
              </div>
              <div className='result'>
                <h1>5</h1>
                <p>anos de CNPJ</p>
              </div>
              <div className='result'>
                <h1>0</h1>
                <p>reclamações</p>
              </div>
            </div>
          </CardAboutSession>
        </AboutSectionCard>

        <AboutSectionCardUnidade>
          <AboutSectionTitle>Unidades</AboutSectionTitle>

          <AboutSectionCardUnidadeContent>
            <AboutSectionCardUnidadeContentItem>
              <div className='icon-box'>
                <img src={LocationIcon} alt='Location' />
              </div>
              <div className='description-box'>
                <h2>Belo Horizonte</h2>
                <p>
                  Endereço: R. Juiz Achilles Velloso, 160 Bairro Estoril, BH -
                  CEP 30494-180 Telefone: (31) 4042-5566
                </p>
              </div>
            </AboutSectionCardUnidadeContentItem>
            <AboutSectionCardUnidadeContentItem>
              <div className='icon-box'>
                <img src={LocationIcon} alt='Location' />
              </div>
              <div className='description-box'>
                <h2>São Paulo</h2>
                <p>
                  Endereço: Rua Flórida, 1738 Cj 121 Bairro Brooklin, SP - CEP
                  04565-001 Telefone: (11) 2500-2228
                </p>
              </div>
            </AboutSectionCardUnidadeContentItem>
          </AboutSectionCardUnidadeContent>
        </AboutSectionCardUnidade>
      </AboutSectionContent>
    </AboutSectionWrapper>
  );
};

export default AboutSection;
