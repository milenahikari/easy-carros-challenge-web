import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 496px;

    img {
      width: 100%;
    }

    @media (max-width: 450px) {
      width: 300px;
    }
  }

  h1 {
    font-weight: 300;
    color: #0c5990;
    margin-top: 106px;

    @media (max-width: 450px) {
      font-size: 22px;
    }
  }

  p {
    margin-top: 16px;
    line-height: 1.5rem;
    text-align: center;
  }

  button {
    width: 120px;
    margin-top: 70px;
    padding: 20px;
    border: 0;
    border-radius: 32px;
    background: #0c5990;
    color: #fff;
  }

  @media (max-width: 450px) {
    padding: 20px;
  }
`;
