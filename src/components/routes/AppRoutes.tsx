import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../layout/Layout';
import Error404 from '../pages/error404/Error404';
import { routes } from './list';

const AppRoutes:FC = () => {
  const isAuth = true

  return (
      <Routes>
        {routes.map(route => {
          if (route.auth && !isAuth) {
            return false
          }

          return (
              <Route
                path={route.path}
                key={`route ${route.path}`}
                element={
                  <Layout>
                    {<route.element/>}
                  </Layout>
                }
              />
          )
        })}
        <Route path='*' element={<Error404/>}/>
      </Routes>
    
  );
};

export default AppRoutes;