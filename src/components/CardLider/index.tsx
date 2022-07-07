import {
  CardLiderAvatar,
  CardLiderContent,
  CardLiderFooter,
  CardLiderHeader,
  CardLiderInfo,
  CardLiderWrapper,
} from './style';

import linkedin from '/public/linkedin.png';

export type CardLiderProps = {
  id: number;
  nome: string;
  cargo: string;
  bio: string;
  link: string;
};

const CardLider: React.FC<CardLiderProps> = ({ nome, cargo, bio, link }) => {
  return (
    <>
      <CardLiderWrapper>
        <CardLiderAvatar />

        <CardLiderContent>
          <CardLiderHeader>
            <p>{nome}</p>
            <p>{cargo}</p>
          </CardLiderHeader>
          <CardLiderInfo>
            <p>{bio}</p>
          </CardLiderInfo>
          <CardLiderFooter>
            <a href={link} target='_blank'>
              <div className='social'>
                <img src={linkedin} alt='linkedin' />
              </div>
            </a>
          </CardLiderFooter>
        </CardLiderContent>
      </CardLiderWrapper>
    </>
  );
};

export default CardLider;
