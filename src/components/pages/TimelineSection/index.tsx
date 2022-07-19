import { CaretDown, CaretUp } from 'phosphor-react';
import { useEffect, useState } from 'react';

import Img1 from '/selos-agro-e-retail-broker.jpg';
import Img2 from '/selo-execution-broker.jpg';
import Img3 from '/bicampea-exame.png';
import Img4 from '/tricampea-exame.png';
import Img5 from '/b3-qo.png';

import {
  TimelineCategory,
  TimelineHeader,
  TimelineImage,
  TimelineItem,
  TimelineItemDescription,
  TimelineItemTitle,
  TimelineListItens,
  TimelineSectionContainer,
  TimelineSectionTitle,
  TimelineSectionWrapper,
} from './style';

export const TimelineSection = () => {
  const [selectedView, setSelectedView] = useState(1);

  const scrollTo = (id: number) => {
    const element = document.getElementById(`${String(id)}`);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleView = () => {
    if (selectedView === 4) {
      setSelectedView(1);
    } else {
      setSelectedView(selectedView + 1);
    }
  };

  useEffect(() => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot) => {
      dot.classList.remove('active');
    });
    const dot = document.querySelector(
      `.dot[data-id="${String(selectedView)}"]`
    );
    if (dot) {
      dot.classList.add('active');
    }
    scrollTo(selectedView);
  }, [selectedView]);

  return (
    <TimelineSectionWrapper>
      <TimelineSectionContainer>
        <TimelineSectionTitle>
          <TimelineCategory>
            <span>
              Linha <strong>do tempo</strong>
            </span>
          </TimelineCategory>
          <p>
            Nossa
            <strong> História</strong>
          </p>
        </TimelineSectionTitle>

        <TimelineListItens>
          <TimelineItem id='1'>
            <div className='left'>
              <div className='lineTopLeft'></div>
            </div>
            <div className='divider'>
              <div className='checkpoint' />
              <div className='line' />
            </div>
            <div className='right'>
              <TimelineHeader>
                <TimelineItemTitle>1983</TimelineItemTitle>
                <TimelineItemTitle>Início das Atividades</TimelineItemTitle>
              </TimelineHeader>
              <TimelineItemDescription>
                <p>
                  A Nova Futura Investimentos inicia suas atividades com o nome
                  Futura Corretora, nos mercados de derivativos, como
                  sócia-fundadora da BM&F (Bolsa de Mercadorias e Futuros).
                </p>
              </TimelineItemDescription>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className='left'>
              <TimelineHeader>
                <TimelineItemTitle>1996</TimelineItemTitle>
                <TimelineItemTitle>Hedge de Commodities</TimelineItemTitle>
              </TimelineHeader>
              <TimelineItemDescription>
                <p>
                  Pioneira na introdução do conceito de Hedge de Commodities, em
                  1996, foi reconhecida pela BMF como Corretora de Destaque na
                  Negociação de Contratos Futuros Agropecuários nas modalidades
                  Açúcar, Soja, Álcool e Boi.
                </p>
              </TimelineItemDescription>
            </div>
            <div className='divider'>
              <div className='checkpoint' />

              <div className='line' />
            </div>
            <div className='right'>
              <div className='lineTopRight'></div>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className='left'>
              <div className='lineTopLeft'></div>
            </div>
            <div className='divider'>
              <div className='checkpoint' />
              <div className='line' />
            </div>
            <div className='right'>
              <TimelineHeader>
                <TimelineItemTitle>2000</TimelineItemTitle>
                <TimelineItemTitle>
                  Fundação da Nova Futura DTVM
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
          </TimelineItem>
          {/* section 2*/}
          <TimelineItem id='2'>
            <div className='left'>
              <TimelineHeader>
                <TimelineItemTitle>2007</TimelineItemTitle>
                <TimelineItemTitle>
                  Recebe selos de qualificação da BM&F
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
            <div className='divider'>
              <div className='checkpoint' />

              <div className='line' />
            </div>
            <div className='right'>
              <div className='lineTopRight'></div>
              <TimelineImage>
                <img className='b3' src={Img1} alt='Selos B3' />
              </TimelineImage>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className='left'>
              <div className='lineTopLeft'></div>
              <TimelineImage>
                <img className='b3' src={Img2} alt='Selos B3' />
              </TimelineImage>
            </div>
            <div className='divider'>
              <div className='checkpoint' />
              <div className='line' />
            </div>
            <div className='right'>
              <TimelineHeader>
                <TimelineItemTitle>2011</TimelineItemTitle>
                <TimelineItemTitle>
                  Conquista o selo Execution Broker
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className='left'>
              <TimelineHeader>
                <TimelineItemTitle>2015</TimelineItemTitle>
                <TimelineItemTitle>
                  Ocorre a fusão das corretoras Futura e Nova Futura D.T.V.M.,
                  dando origem a Nova Futura Investimentos.
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
            <div className='divider'>
              <div className='checkpoint' />

              <div className='line' />
            </div>
            <div className='right'>
              <div className='lineTopRight'></div>
            </div>
          </TimelineItem>

          {/* section 3*/}

          <TimelineItem id='3'>
            <div className='left'>
              <div className='lineTopLeft'></div>
            </div>
            <div className='divider'>
              <div className='checkpoint' />
              <div className='line' />
            </div>
            <div className='right'>
              <TimelineHeader>
                <TimelineItemTitle>2016</TimelineItemTitle>
                <TimelineItemTitle>
                  Inicia a operação de Varejo e recebe o quarto Selo de
                  Certificação - o Nonresident Investor Broker.
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className='left'>
              <TimelineHeader>
                <TimelineItemTitle>2019</TimelineItemTitle>
                <TimelineItemTitle>
                  A melhor carteira recomendada de ações do Brasil em 2018 e
                  2019.
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
            <div className='divider'>
              <div className='checkpoint' />

              <div className='line' />
            </div>
            <div className='right'>
              <div className='lineTopRight'></div>
              <TimelineImage>
                <img className='b3' src={Img3} alt='Bicampeã Exame' />
              </TimelineImage>
            </div>
          </TimelineItem>
          <TimelineItem>
            <div className='left'>
              <div className='lineTopLeft'></div>
              <TimelineImage>
                <img className='b3' src={Img4} alt='Tricampeã Exame' />
              </TimelineImage>
            </div>
            <div className='divider'>
              <div className='checkpoint' />
              <div className='line' />
            </div>
            <div className='right'>
              <TimelineHeader>
                <TimelineItemTitle>2020</TimelineItemTitle>
                <TimelineItemTitle>
                  A melhor carteira recomendada de ações do Brasil em 2020
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
          </TimelineItem>
          {/* Section 4 */}
          <TimelineItem id='4'>
            <div className='left'>
              <TimelineHeader>
                <TimelineItemTitle>2019</TimelineItemTitle>
                <TimelineItemTitle>
                  A melhor carteira recomendada de ações do Brasil em 2018 e
                  2019.
                </TimelineItemTitle>
              </TimelineHeader>
            </div>
            <div className='divider'>
              <div className='checkpoint' />

              <div className='line' />
            </div>
            <div className='right'>
              <div className='lineTopRight'></div>
              <TimelineImage>
                <img
                  className='b3'
                  src={Img5}
                  alt='B3 qualificação Operacional'
                />
              </TimelineImage>
            </div>
          </TimelineItem>

          <button className='buttonNavigation' onClick={() => handleView()}>
            {selectedView === 4 ? (
              <CaretUp size={28} color='#fd645f' />
            ) : (
              <CaretDown size={28} color='#fd645f' />
            )}
          </button>

          <div className='dotsGroup'>
            <div className='dot active' data-id='1'></div>
            <div className='dot' data-id='2'></div>
            <div className='dot' data-id='3'></div>
            <div className='dot' data-id='4'></div>
          </div>
        </TimelineListItens>
      </TimelineSectionContainer>
    </TimelineSectionWrapper>
  );
};
