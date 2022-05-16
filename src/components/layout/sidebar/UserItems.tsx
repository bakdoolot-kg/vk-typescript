import React, { FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Avatar, Card, Typography} from '@mui/material';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { QuestionAnswer } from '@mui/icons-material';
import { IUser } from '../../../types';
import { users } from './dataUsers';

{/* <Box sx={{
      display: 'flex',
      alignItems: 'center'
    }}>
      <Link to='/profile' style={{display: 'flex', alignItems: 'center'}}>
        <Box 
          sx={{
            position: 'relative',
            borderRadius: '50%', 
            overflow: 'hidden',
            width: 50,
            height: 50,
            marginRight: 2
          }}
          >
        <img
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="user" 
          width='50'
          height='50'
        />
        </Box>
        <Avatar 
          alt="user"
          src="https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&w=1000&q=80" 
          style={{marginRight: 5}}
        />


        <Box sx={{
          backgroundColor: 'green',
          width: 4,
          height: 4,
          position: 'absolute',
          bottom: 2,
          left: 2
        }}></Box>
        <span>Ivan Groznyi</span>       
      </Link>
     </Box> */}



const UserItems:FC = () => {

  const navigate = useNavigate()

  return (
    <Card variant='outlined' sx={{ padding: 2, backgroundColor: '#f1f7fa', border: 'none', borderRadius: 3 }}>

      {users.map(user => 

      <Link key={user._id} to={`/profile/${user._id}`} style={{display: 'flex', alignItems: 'center', textDecoration: 'none', color: '#111', marginBottom: 12}}>
      <Box 
          sx={{
            position: 'relative', 
            width: 50,
            height: 50,
            marginRight: 2
          }}
          >
        <Avatar 
          alt="user"
          src={user.avatar} 
          style={{marginRight: 5, width: 48, height: 48, borderRadius: '50%'}}
        />

        {user.isInNetwork && 
        <Box sx={{
          backgroundColor: '#4fb14f',
          border: "2px solid #f1f7fa",
          width: 12,
          height: 12,
          position: 'absolute',
          bottom: 1,
          right: 1,
          borderRadius: '50%'
        }}></Box>
      }
      </Box>

        <Typography variant='body1'>{user.name}</Typography>       
      </Link>
      )}

      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/messages')}>
            <ListItemIcon>
              <QuestionAnswer />
            </ListItemIcon>
            <ListItemText primary="Сообщения" />
          </ListItemButton>
        </ListItem>
      </List>
    </Card>
    
  );
};

export default UserItems