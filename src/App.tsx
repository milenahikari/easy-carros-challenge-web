import React from 'react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/global';
import 'react-toastify/dist/ReactToastify.css';

import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';

const app: React.FC = () => (
  <>
    <ToastContainer />
    <Dashboard />
    <GlobalStyles />
  </>
);

export default app;
