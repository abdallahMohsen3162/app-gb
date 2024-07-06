import React, { useState } from 'react';
import Link from 'next/link';
import styles from './sider-style.css';

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SidebarComponent = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`position-relative ${collapsed ? 'sidebar-collapsed' : 'sidebar-expanded'} sidebar`}>
      <div className='menu-item' onClick={toggleSidebar}>
        <MenuRoundedIcon className='menu-icon' />
        <span className='menu-text'>Menu</span>
      </div>
      <Link href="/image" passHref>
        <div className='menu-item'>
          <ImageIcon className='menu-icon' />
          <span className='menu-text'>Image</span>
        </div>
      </Link>
      <Link href="/videos" passHref>
        <div className='menu-item'>
          <VideoLibraryIcon className='menu-icon' />
          <span className='menu-text'>Videos</span>
        </div>
      </Link>
      <Link href="/dashboard" passHref>
        <div className='menu-item'>
          <DashboardIcon className='menu-icon' />
          <span className='menu-text'>Dashboard</span>
        </div>
      </Link>
    </div>
  );
};

export default SidebarComponent;
