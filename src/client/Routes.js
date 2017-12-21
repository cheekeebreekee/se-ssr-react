import React from 'react';
import HomePage from './pages/HomePage';
import PricesPage from './pages/PricesPage';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  },
  {
    ...PricesPage,
    path: '/prices'
  }

];
