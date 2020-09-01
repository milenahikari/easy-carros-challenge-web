import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { uuid } from 'uuidv4';
import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { toast } from 'react-toastify';

import close from '../../assets/exit-icon.svg';
import check from '../../assets/check-icon.svg';

import {
  Container,
  NewOrderService,
  ContentTable,
  OrderService,
  ButtonConfirm,
  ButtonCancel,
  ContainerButtons,
  ButtonDelete,
  ButtonFinish,
} from './styles';

interface IOrderService {
  id: string;
  name: string;
  appointmentDate: string;
  appointmentDateFormated?: string;
  executionDate?: string;
  idCar: string;
}

const Dashboard: React.FC = () => {
  const [inputNameService, setInputNameService] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputIdCar, setInputIdCar] = useState('');

  const [yesterdayDate, setYesterdayDate] = useState('');

  const [orderServices, setOrderServices] = useState<IOrderService[]>([]);

  const formatDate = useMemo(
    () => (date: string) => {
      return format(parseISO(date), "dd'/'MM'/'yyyy", {
        locale: ptBR,
      });
    },
    [],
  );

  useEffect(() => {
    setYesterdayDate(format(new Date(), "yyyy'-'MM'-'dd"));

    const servicesLocalStorage = localStorage.getItem('@orderServices');

    if (!servicesLocalStorage) return;

    const parsedServices = JSON.parse(servicesLocalStorage);

    const formatedServices = parsedServices.map((service: IOrderService) => ({
      ...service,
      appointmentDateFormated: formatDate(service.appointmentDate),
    }));

    setOrderServices(formatedServices);
  }, [formatDate]);

  const handleSaveStorage = useCallback((services: IOrderService[]) => {
    const parsedService = JSON.stringify(services);
    localStorage.setItem('@orderServices', parsedService);
  }, []);

  const handleSubmit = useCallback(
    event => {
      try {
        event?.preventDefault();

        const newService = {
          id: uuid(),
          name: inputNameService,
          appointmentDate: inputDate,
          appointmentDateFormated: formatDate(inputDate),
          idCar: inputIdCar,
        };

        const servicesLocalStorage = localStorage.getItem('@orderServices');

        if (!servicesLocalStorage) {
          handleSaveStorage([newService]);
          setOrderServices([newService]);
          return;
        }

        const services = JSON.parse(servicesLocalStorage);

        const arrayServices = [...services, newService];

        handleSaveStorage(arrayServices);

        setOrderServices(arrayServices);

        toast.success('Ordem de serviço criada com sucesso!');
      } catch (e) {
        toast.error('Erro ao criar ordem serviço!');
      }
    },
    [inputNameService, inputDate, inputIdCar, formatDate, handleSaveStorage],
  );

  const handleCancel = useCallback(() => {
    setInputNameService('');
    setInputDate('0000-00-00');
    setInputIdCar('');
  }, []);

  const handleOrderDelete = useCallback(
    (id: string) => {
      if (!window.confirm('Deseja realmente deletar a ordem de serviço?'))
        return;

      try {
        const servicesLocalStorage = localStorage.getItem('@orderServices');

        if (!servicesLocalStorage) return;

        const parsedService = JSON.parse(servicesLocalStorage);

        const filteredServices = parsedService.filter(
          (service: IOrderService) => service.id !== id,
        );

        handleSaveStorage(filteredServices);
        setOrderServices(filteredServices);
        toast.success('Ordem de serviço deletada!');
      } catch (e) {
        toast.error('Não foi possível deletar a ordem de serviço!');
      }
    },
    [handleSaveStorage],
  );

  const handleOrderFinish = useCallback(
    (id: string) => {
      try {
        const orderFound = orderServices.find(
          (order: IOrderService) => order.id === id,
        );

        if (!orderFound) return;

        orderFound.executionDate = format(new Date(), "dd'/'MM'/'yyyy");

        const services = orderServices.filter(
          (order: IOrderService) => order.id !== id,
        );

        const arrayServices = [...services, orderFound];

        handleSaveStorage(arrayServices);
        setOrderServices(arrayServices);
        toast.success('Ordem de serviço finalizada com sucesso!');
      } catch (e) {
        toast.error('Erro ao finalizar a ordem de serviço!');
      }
    },
    [orderServices, handleSaveStorage],
  );

  return (
    <Container>
      <NewOrderService>
        <h1>Nova ordem de serviço</h1>
        <p>Os campos com * são obrigatórios</p>

        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="Serviço *"
              required
              value={inputNameService}
              onChange={event => setInputNameService(event.target.value)}
            />
            <input
              type="date"
              required
              value={inputDate}
              min={yesterdayDate}
              onChange={event => setInputDate(event.target.value)}
            />
            <input
              type="text"
              placeholder="Placa *"
              required
              value={inputIdCar}
              onChange={event => setInputIdCar(event.target.value)}
            />
          </div>

          <ContainerButtons>
            <ButtonCancel type="button" onClick={handleCancel}>
              Cancelar
            </ButtonCancel>
            <ButtonConfirm type="submit">Adicionar</ButtonConfirm>
          </ContainerButtons>
        </form>
      </NewOrderService>

      <ContentTable>
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
            {orderServices.length > 0 ? (
              orderServices.map(order => (
                <tr key={order.id}>
                  <td className="blue">{order.name}</td>
                  <td>{order.executionDate ? order.executionDate : '__'}</td>
                  <td>{order.appointmentDateFormated}</td>
                  <td className="blue">{order.idCar}</td>
                  <td>
                    <ButtonDelete
                      type="button"
                      onClick={() => handleOrderDelete(order.id)}
                    >
                      <img src={close} alt="Excluir" />
                      <span>Excluir</span>
                    </ButtonDelete>
                  </td>
                  <td>
                    {!order.executionDate && (
                      <ButtonFinish
                        type="button"
                        onClick={() => handleOrderFinish(order.id)}
                      >
                        <img src={check} alt="Finalizar" />
                        <span>Finalizar</span>
                      </ButtonFinish>
                    )}
                  </td>
                </tr>
              ))
            ) : (
                <tr>
                  <td colSpan={6} style={{ textAlign: 'center' }}>
                    Nenhuma ordem de serviço cadastrada!
                </td>
                </tr>
              )}
          </tbody>
        </OrderService>
      </ContentTable>
    </Container>
  );
};

export default Dashboard;
