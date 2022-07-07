import Card from '../UI/Card';
import FormContainer from './style';
import Input from '../UI/Input';
import Button from '../UI/Button';

export const Form = () => {
  return (
    <Card>
      <FormContainer>
        <h2>Quer aumentar seu tráfego?</h2>

        <Input label='Nome' />
        <Input label='Seu site' />
        <Input label='Email' />
        <Input label='Telefone' />

        <Button type='submit' textColor='white' backgroundColor='#FF8412'>
          Falar com Especialista
        </Button>
      </FormContainer>
    </Card>
  );
};
