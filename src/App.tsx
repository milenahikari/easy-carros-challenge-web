import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

const app: React.FC = () => (
  <>
    <ToastContainer />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default app;
