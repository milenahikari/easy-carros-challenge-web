import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/easy-carros-logo.png';

import { Container, Content } from './styles';

const Welcome: React.FC = () => {
  const history = useHistory();

  const handleRedirect = useCallback(() => {
    history.push('/dashboard');
  }, [history]);

  return (
    <Container>
      <Content>
        <div>
          <img src={logo} alt="" />
        </div>

        <h1>Bem-vindo ao teste front end!</h1>

        <p>
          Este teste tem como objetivo avaliar e desafiar você. Não é
          obrigatório realizá-lo completamente, queremos apenas reconhecer seu
          esforço e potencial para aprender, se adaptar e tomar decisões.
        </p>

        <button type="button" onClick={handleRedirect}>
          Entrar
        </button>
      </Content>
    </Container>
  );
};

export default Welcome;
