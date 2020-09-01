import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const NewOrderService = styled.div`
  box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
  margin-top: 120px;
  padding: 20px;

  h1 {
    font-size: 24px;
    font-weight: 500;
    color: #0c5990;
  }

  p {
    color: #c1c1c1;
  }

  form {
    margin-top: 50px;

    input {
      color: #707070;
      margin-right: 25px;
      height: 40px;
      width: 300px;
      border: 0;
      border-bottom: 2px solid #0c5990;

      @media (max-width: 450px) {
        width: 100%;
        margin-top: 20px;
      }
    }
  }

  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 50px;

  @media (max-width: 450px) {
    justify-content: space-around;

    button {
      margin: 0;
    }
  }
`;

export const ButtonCancel = styled.button`
  background: #fff;
  color: #0c5990;
  width: 168px;
  margin-right: 25px;
  padding: 18px;
  border: 1px solid #0c5990;
  border-radius: 32px;

  @media (max-width: 450px) {
    height: 40px;
    width: 100px;
    font-size: 14px;
    padding: 5px;
  }
`;

export const ButtonConfirm = styled.button`
  background: #0c5990;
  color: #fff;
  width: 168px;
  margin-right: 25px;
  padding: 18px;
  border: 0;
  border-radius: 32px;

  @media (max-width: 450px) {
    height: 40px;
    width: 100px;
    font-size: 14px;
    padding: 5px;
  }
`;

export const ContentTable = styled.div`
  overflow-x: auto;
  /* @media (max-width: 450px) {

  } */
`;

export const OrderService = styled.table`
  width: 100%;
  margin-top: 80px;
  border-spacing: 0 1em;
  font-weight: 500;

  thead {
    background: #0c5990;
    color: #fff;

    td {
      min-width: 200px;
      padding: 10px;
    }
  }

  tbody {
    tr {
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.16);
      height: 70px;

      td {
        padding: 20px;
      }
      .blue {
        color: #0c5990;
      }
    }
  }
`;

export const ButtonDelete = styled.button`
  width: 94px;
  padding: 10px;
  border-radius: 32px;
  background: #fff;
  color: #f91919;
  border: 1px solid #f91919;
  display: flex;
  justify-content: space-around;

  span {
    font-size: 12px;
  }
`;

export const ButtonFinish = styled.button`
  width: 94px;
  padding: 10px;
  border-radius: 32px;
  background: #fff;
  color: #02e64a;
  border: 1px solid #02e64a;
  display: flex;
  justify-content: space-around;

  span {
    font-size: 12px;
  }
`;
