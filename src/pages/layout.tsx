import { Outlet } from 'react-router';
import styled from 'styled-components';
import { Drawer } from '../components';

const Layout = () => {
  return (
    <LayoutContainer>
      <Drawer />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;

const LayoutContainer = styled.div``;
