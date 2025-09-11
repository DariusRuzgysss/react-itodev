import { useState } from 'react';
import { NavigationLinks, Routes } from '@/utils/constants';
import useActiveLink from '@/hooks/useActiveLink';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Header from '../header';

const NavigationDrawer = () => {
  const pathName = useActiveLink();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <Header toggleDrawer={toggleDrawer} />
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 200 }} onClick={toggleDrawer(false)}>
          <List>
            <ListItemButton
              aria-label="Home button"
              component={Link}
              to={Routes.Home}
            >
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
            </ListItemButton>

            {NavigationLinks.map(({ title, icon, path }) => {
              const Icon = icon;
              return (
                <ListItem key={path} disablePadding>
                  <ListItemButton aria-label={title} component={Link} to={path}>
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
      </Drawer>
    </Box>
  );
};

export default NavigationDrawer;
