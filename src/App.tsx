import React from 'react';
import GlobalStyles from './styles/global';
import Welcome from './pages/Welcome';

const app: React.FC = () => (
  <>
    <Welcome />
    <GlobalStyles />
  </>
);

export default app;
