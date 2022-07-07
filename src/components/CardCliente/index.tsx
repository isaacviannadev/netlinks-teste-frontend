import React from 'react';
import Card from '../UI/Card';

import cliente1 from '/public/Group 1.png';
import cliente2 from '/public/Group 2.png';
import cliente3 from '/public/Group 3.png';
import cliente4 from '/public/Group 4.png';

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
  const getImg = (id: number) => {
    switch (id) {
      case 1:
        return cliente1;
      case 2:
        return cliente2;
      case 3:
        return cliente3;
      case 4:
        return cliente4;
      default:
        return cliente1;
    }
  };

  return (
    <CardClienteWrapper>
      <CardClienteContent>
        <CardClienteContentHeader>
          <div className='logo-box'>
            <img src={getImg(id)} alt={nome} />
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
