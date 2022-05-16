import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card,List,ListItem,ListItemButton,ListItemIcon, ListItemText } from '@mui/material';
import { menu } from './dataMenu';

const MenuItem:FC = () => {

  const navigate = useNavigate()

  return (
    <Card variant='outlined' sx={{ padding: 2, backgroundColor: '#f1f7fa', border: 'none', borderRadius: 3, marginTop: 5, marginBottom: 5, }}>
      <List>
        {menu.map(item => (
        <ListItem key={item.link} disablePadding>
          <ListItemButton onClick={() => navigate(item.link)}>
            <ListItemIcon sx={{minWidth: 37}}>
              <item.icon/>
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItemButton>
        </ListItem>
        ))}
      </List>
    </Card>
    
  );
};

export default MenuItem;