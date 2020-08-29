import React from 'react';
import GlobalStyles from './styles/global';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';

const app: React.FC = () => (
  <>
    <Dashboard />
    <GlobalStyles />
  </>
);

export default app;
