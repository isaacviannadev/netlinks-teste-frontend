import { clientesMock } from '../../../utils/mocks';
import CardCliente, { CardClienteProps } from '../../CardCliente';
import {
  ClientesSectionHeader,
  ClientesSectionList,
  ClientesSectionTitle,
  ClientesSectionWrapper,
} from './style';

const ClientesSection = () => {
  function renderCliente() {
    return clientesMock.map((lider: CardClienteProps) => {
      return <CardCliente key={lider.id} {...lider} />;
    });
  }
  return (
    <ClientesSectionWrapper>
      <ClientesSectionHeader>
        <ClientesSectionTitle>
          <p>
            Eles <strong>CONFIAM</strong> na Netlinks
          </p>
        </ClientesSectionTitle>
      </ClientesSectionHeader>
      <ClientesSectionList>{renderCliente()}</ClientesSectionList>
    </ClientesSectionWrapper>
  );
};

export default ClientesSection;
