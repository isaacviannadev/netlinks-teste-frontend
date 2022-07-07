import React from 'react';
import Card from '../UI/Card';
import {
  CardClienteContent,
  CardClienteContentDetail,
  CardClienteContentHeader,
  CardClienteWrapper,
} from './style';

export type CardClienteProps = {
  id: number;
  nome: string;
  img: string;
};

const CardCliente: React.FC<CardClienteProps> = ({ id, nome, img }) => {
  return (
    <CardClienteWrapper>
      <CardClienteContent>
        <CardClienteContentHeader>
          <div className='logo-box'>
            <img src={img} alt={nome} />
          </div>

          <div className='info-box'>
            <h2>{nome}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              interdum porta arcu vel vulputate.
            </p>
          </div>
        </CardClienteContentHeader>

        <CardClienteContentDetail>
          <div className='left-cliente'>
            <Card noShadow>
              <div></div>
            </Card>
          </div>
          <div className='right-cliente'>
            <p>
              <strong>Início SEO:</strong> 56.000 visitas mensais (out/2020)
            </p>

            <strong>Resultado:</strong>
            <div>
              <h1>300.000</h1>
              <h3>visitas mensais (out/2021)</h3>
            </div>
            <div className='divider'></div>
            <div>
              <h1>535%</h1>
              <h3>de crescimento</h3>
            </div>

            <p className='destaque'>
              <strong>Destaque:</strong> Primeiras posiçoes na palavra-chave
              desafiadora ”seguro viagem”
            </p>
          </div>
        </CardClienteContentDetail>
      </CardClienteContent>
    </CardClienteWrapper>
  );
};

export default CardCliente;
