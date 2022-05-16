import React, { FC } from 'react';
import MenuItem from './MenuItem';
import UserItems from './UserItems';

const Sidebar:FC = () => {
  return (
    <div className='sidebar'>
      <UserItems/>
      <MenuItem/>
    </div>
  );
};

export default Sidebar;