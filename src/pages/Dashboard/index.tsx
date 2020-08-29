import React from 'react';

import close from '../../assets/exit-icon.svg';
import check from '../../assets/check-icon.svg';

import {
  Container,
  NewOrderService,
  OrderService,
  ContainerButtons,
  ButtonExcluir,
  ButtonFinalizar,
} from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <NewOrderService>
        <h1>Nova ordem de serviço</h1>
        <p>Os campos com * são obrigatórios</p>

        <div>
          <input name="service" type="text" placeholder="Serviço *" />
          <input name="date" type="date" />
          <input name="id_car" type="text" placeholder="Placa *" />
        </div>

        <ContainerButtons>
          <button type="button">Cancelar</button>
          <button type="button">Adicionar</button>
        </ContainerButtons>
      </NewOrderService>

      <OrderService>
        <thead>
          <tr>
            <td>Serviço</td>
            <td>Data de Execução</td>
            <td>Data de Agendamento</td>
            <td>Placa</td>
            <td />
            <td />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="blue">Lavagem ecologica COVID 19</td>
            <td>__</td>
            <td>20/08/2020</td>
            <td className="blue">MBB-1996</td>
            <td>
              <ButtonExcluir type="button">
                <img src={close} alt="Excluir" />
                <span>Excluir</span>
              </ButtonExcluir>
            </td>
            <td>
              <ButtonFinalizar type="button">
                <img src={check} alt="Finalizar" />
                <span>Finalizar</span>
              </ButtonFinalizar>
            </td>
          </tr>
          <tr>
            <td className="blue">Lavagem ecologica COVID 19</td>
            <td>__</td>
            <td>20/08/2020</td>
            <td className="blue">MBB-1996</td>
            <td>
              <ButtonExcluir type="button">
                <img src={close} alt="Excluir" />
                <span>Excluir</span>
              </ButtonExcluir>
            </td>
            <td>
              <ButtonFinalizar type="button">
                <img src={check} alt="Finalizar" />
                <span>Finalizar</span>
              </ButtonFinalizar>
            </td>
          </tr>
        </tbody>
      </OrderService>
    </Container>
  );
};

export default Dashboard;
