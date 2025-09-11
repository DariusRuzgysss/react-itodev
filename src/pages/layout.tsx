import { Drawer } from '../components';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box>
      <Drawer />
      <Outlet />
    </Box>
  );
};

export default Layout;
