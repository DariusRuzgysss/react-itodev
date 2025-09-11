import { useState } from 'react';
import Header from '../header';
import { ListItems, Routes } from '../../utils/constants';
import useActiveLink from '../../hooks/useActiveLink';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const TemporaryDrawer = () => {
  const pathName = useActiveLink();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 200 }} onClick={toggleDrawer(false)}>
      <List>
        <ListItemButton component={Link} to={Routes.Home}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        </ListItemButton>

        {ListItems.map(({ title, icon, path }) => {
          const Icon = icon;
          return (
            <ListItem key={title} disablePadding>
              <ListItemButton component={Link} to={path}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  primary={title}
                  sx={{
                    color:
                      pathName === path
                        ? 'primary.contrastText'
                        : 'text.primary',
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default TemporaryDrawer;
