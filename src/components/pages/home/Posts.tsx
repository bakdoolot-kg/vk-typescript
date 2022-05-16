import React, { FC } from 'react';
import { IPost } from '../../../types';
import {Box} from '@mui/material'

interface IPosts {
  posts: IPost[]
}

const Posts:FC<IPosts> = ({posts}) => {
  return (
    <Box sx={{
      border: '1px solid #ccc',
      borderRadius: '10px',
      padding: 2
    }}>

    </Box>
  );
};

export default Posts;