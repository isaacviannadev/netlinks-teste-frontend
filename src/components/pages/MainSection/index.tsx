import { Form } from '../../Form';
import NetlinksLogo from '../../UI/Logo';
import { MainSectionContainer, MainSectionWrapper } from './style';
import People1 from '/public/people1.png';
import Cliente1 from '/public/Group 1.png';
import Cliente2 from '/public/Group 2.png';
import Cliente3 from '/public/Group 3.png';
import Cliente4 from '/public/Group 4.png';

const MainSection = () => {
  return (
    <MainSectionWrapper>
      <MainSectionContainer>
        <div className='left-section'>
          <NetlinksLogo />
          <h3>Agência especializada em SEO & Apaixonada por Vendas</h3>
          <p>
            Agência especializada em SEO, apaixonada por ajudar empresas a
            venderem mais no Google através de metodologia comprovada, pessoas
            criativas e foco em resultados.
          </p>

          <div className='clientes-section'>
            <p>
              Direto de quem <strong>#confia</strong>
            </p>
            <div className='clientes-list'>
              <div className='clientes-list-item'>
                <img src={Cliente1} alt='Cliente 1' />
                <div className='clientes-description'>
                  <strong>1 milhão em vendas </strong>
                  <p>As vendas no e-commerce aumentaram 1 milhão por mês</p>
                </div>
              </div>
              <div className='clientes-list-item'>
                <img src={Cliente2} alt='Cliente 2' />
                <div className='clientes-description'>
                  <strong>2.500% mais acessos </strong>
                  <p>
                    De 500 a 13.000 visitas mensais em 1 ano em nicho concorrido
                  </p>
                </div>
              </div>
              <div className='clientes-list-item'>
                <img src={Cliente3} alt='Cliente 3' />
                <div className='clientes-description'>
                  <strong>Top 1 conquistado </strong>
                  <p>
                    Primeiro lugar para "parcelar boleto", termo de 13 mil
                    buscas
                  </p>
                </div>
              </div>
              <div className='clientes-list-item'>
                <img src={Cliente4} alt='Cliente 4' />
                <div className='clientes-description'>
                  <strong>Autoridade recuperada </strong>
                  <p>Recuperamos uma queda de tráfego e crescemos o DA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='right-section'>
          <div className='people-container'>
            <img src={People1} alt='Garota sorrindo com celular na mão' />
          </div>
          <div className='form-section'>
            <Form />
          </div>
        </div>
      </MainSectionContainer>
    </MainSectionWrapper>
  );
};

export default MainSection;
