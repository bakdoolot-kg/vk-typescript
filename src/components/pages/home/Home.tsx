import { Box, } from '@mui/material';
import React, { useState } from 'react';
import { IPost } from '../../../types';
import AddPost from './AddPost';

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([])

  return (
    <Box>
      <AddPost setPosts={setPosts} />
    </Box>
  );
};

export default Home;