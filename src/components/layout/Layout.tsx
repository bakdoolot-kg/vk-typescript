import { Grid } from '@mui/material';
import React, {FC} from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const Layout:FC = ({children}) => {
  return (
      <>
        <Header/>
        <Grid container spacing={2} marginX={5} mt={1}>
          <Grid item md={2.5}>
            <Sidebar/>
          </Grid>

          <Grid item md={9}>
            {children}
          </Grid>
        </Grid>
      </>
    );
};

export default Layout;