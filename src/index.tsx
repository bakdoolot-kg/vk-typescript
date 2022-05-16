import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AppRoutes from './components/routes/AppRoutes';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
        <AppRoutes/>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
)
