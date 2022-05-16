import React, { FC, useState } from 'react';
import {Box, TextField} from '@mui/material'
import { IPost, TypeSetState } from '../../../types';
import { users } from '../../layout/sidebar/dataUsers';

interface IAddPost {
  setPosts: TypeSetState<IPost[]>
}

const AddPost:FC<IAddPost> = ({setPosts}) => {
  const [content, setContent] = useState('')
 
  const addPostHandler = () => {
    setPosts(prev => [...prev, {
      author: users[0],
      content,
      createdAt: '5 минут назад',
    }])
  }
 
  return (
    <Box sx={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: 2
    }}>
      <TextField 
        label="Расскажи, что у тебя нового" 
        variant="outlined"
        InputProps={{
          sx: {borderRadius: '25px', width: '100%', backgroundColor: '#f9f9f9'},
        }}
        sx={{width: "100%"}}
        margin='normal'
        onKeyPress={addPostHandler}
        onChange={e => setContent(e.target.value)}
        value={content}
      />
    </Box>
  );
};

export default AddPost;