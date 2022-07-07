import Button from '../../UI/Button';

import Icon1 from '/public/ico1.png';
import Icon2 from '/public/ico2.png';
import Icon3 from '/public/ico3.png';
import Icon4 from '/public/ico4.png';
import Ilu1 from '/public/illustration1.png';
import Ilu2 from '/public/illustration2.png';
import Ilu3 from '/public/illustration3.png';
import Ilu4 from '/public/illustration4.png';

import {
  HelpButtonContainer,
  HelpItem,
  HelpItemDescription,
  HelpItemTitle,
  HelpListItens,
  HelpSectionContainer,
  HelpSectionTitle,
  HelpSectionWrapper,
} from './style';

export const HelpSection = () => {
  return (
    <HelpSectionWrapper>
      <HelpSectionContainer>
        <HelpSectionTitle>
          <strong>como</strong>
          <p>vamos te ajudar</p>
        </HelpSectionTitle>

        <HelpListItens>
          <HelpItem>
            <div className='left'>
              <img src={Ilu1} alt='Ilu1' />
            </div>
            <div className='divider'>
              <img src={Icon1} alt='icon' />
              <div className='line' />
            </div>
            <div className='right'>
              <HelpItemTitle>Estratégia</HelpItemTitle>
              <HelpItemDescription>
                <p>
                  Uma boa estratégia é o principal fator responsável pelo SEO
                  que gera vendas. Através da escolha certa de
                  <strong> palavras-chave</strong>, análise de{' '}
                  <strong> concorrência</strong>, auditoria técnica e{' '}
                  <strong>monitoramento</strong> dos <strong>resultados</strong>{' '}
                  é que vamos alcançar os resultados e metas. Um dos nossos
                  diferenciais é a estratégia de Cauda Longa, uma técnica focada
                  em priorizar palavras-chave com menor volume de buscas mas
                  altas taxas de conversão, além de serem conquistadas mais
                  rapidamente.
                </p>
              </HelpItemDescription>
            </div>
          </HelpItem>

          <HelpItem>
            <div className='left'>
              <HelpItemTitle>Conteúdo</HelpItemTitle>
              <HelpItemDescription>
                <p>
                  Criamos conteúdos de posts, páginas e produtos que os clientes
                  e os buscadores amam. Contamos com <strong>redatores</strong>{' '}
                  e analistas de conteúdo <strong>criativos</strong>, com grande
                  conhecimento das boas práticas de redação e geração de{' '}
                  <strong>vendas</strong>. O processo funciona com a pesquisa de
                  referências por nossa equipe ou com alguém da sua equipe
                  nutrindo com direcionamentos <strong>especializados</strong>.
                  Também garantimos que todos os nossos conteúdos são{' '}
                  <strong>originais</strong> através de ferramentas anti-plágio.
                </p>
              </HelpItemDescription>
            </div>
            <div className='divider'>
              <img src={Icon2} alt='icon' />
              <div className='line' />
            </div>
            <div className='right'>
              <img src={Ilu2} alt='Ilu2' />
            </div>
          </HelpItem>

          <HelpItem>
            <div className='left'>
              <img src={Ilu3} alt='Ilu3' />
            </div>
            <div className='divider'>
              <img src={Icon3} alt='icon' />
              <div className='line' />
            </div>
            <div className='right'>
              <HelpItemTitle>Autoridade</HelpItemTitle>
              <HelpItemDescription>
                <p>
                  Conhecida como <strong>Link Building</strong>, nossa solução
                  de aumento de autoridade é crucial para mostrar aos buscadores
                  que sua empresa domina determinados assuntos. Fazemos isso
                  através de uma técnica conhecida como{' '}
                  <strong>Guest Post</strong>, onde enviamos artigos ricos e{' '}
                  <strong>contextuais</strong> para editores de portais, blogs e
                  empresas brasileiras que já possuem uma boa autoridade. Nesses
                  artigos, inserimos um link para seu site de forma{' '}
                  <strong>natural</strong> e bem vista pelo Google.
                </p>
              </HelpItemDescription>
            </div>
          </HelpItem>

          <HelpItem>
            <div className='left'>
              <HelpItemTitle>Tecnologia</HelpItemTitle>
              <HelpItemDescription>
                <p>
                  Além do SEO que gera vendas, somos especialistas na{' '}
                  <strong>criação</strong> e manutenção de sites em{' '}
                  <strong>WordPress</strong> e UX e UI Design. Essa habilidade
                  nos permite ajudar empresas que não contam com um time interno
                  ou fornecedor de <strong>confiança</strong> nessas áreas.
                  Essas soluções são muito importantes para a correção dos erros
                  técnicos encontrados na <strong>auditoria</strong> técnica.
                  Caso você já tenha um fornecedor ou equipe interna,
                  trabalhamos super bem em conjunto, sem nenhum problema.
                </p>
              </HelpItemDescription>
            </div>
            <div className='divider'>
              <img src={Icon4} alt='icon' />
              <div className='line' />
              <div className='end'></div>
            </div>
            <div className='right'>
              <img src={Ilu4} alt='Ilu4' />
            </div>
          </HelpItem>
        </HelpListItens>

        <HelpButtonContainer>
          <Button withShadow>VAMOS CONVERSAR</Button>
        </HelpButtonContainer>
      </HelpSectionContainer>
    </HelpSectionWrapper>
  );
};
