import React from 'react';
import FormContainer from '../../Form/style';
import Button from '../../UI/Button';
import Input from '../../UI/Input';
import {
  FooterSectionContent,
  FooterSectionForm,
  FooterSectionTitle,
  FooterSectionWrapper,
} from './style';

import Cara from '/public/cara2.png';

const FooterSection = () => {
  return (
    <FooterSectionWrapper>
      <FooterSectionContent>
        <FooterSectionForm>
          <img src={Cara} alt='' />
        </FooterSectionForm>
        <FooterSectionForm>
          <FooterSectionTitle>
            <p>Vamos</p>
            <strong>conversar?</strong>
          </FooterSectionTitle>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            interdum porta arcu vel vulputate. Morbi quis egestas dui. Integer
            nibh mauris, pulvinar eu tempus eget, facilisis et nunc.
          </p>

          <FormContainer>
            <Input label='Nome' />
            <Input label='Seu site' />
            <Input label='Email' />
            <Input label='Telefone' />

            <Button type='submit' backgroundColor='#50D9D4'>
              Falar com Especialista
            </Button>
          </FormContainer>
        </FooterSectionForm>
      </FooterSectionContent>
    </FooterSectionWrapper>
  );
};

export default FooterSection;
