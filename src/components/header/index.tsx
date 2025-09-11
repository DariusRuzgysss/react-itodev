import type { HeaderProps } from './types';
import { Box, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Typography } from '@mui/material';
import { useMatches } from 'react-router-dom';
import type { RouteHandle } from '@/routes/types';

const Header = ({ toggleDrawer }: HeaderProps) => {
  const matches = useMatches();
  const current = matches.find((m) => (m.handle as RouteHandle)?.title);
  return (
    <Box
      display="flex"
      flexDirection="row"
      alignItems="center"
      sx={{
        bgcolor: 'primary.main',
        p: 2,
      }}
    >
      <IconButton
        size="large"
        style={{ marginRight: 20 }}
        onClick={toggleDrawer(true)}
        aria-label="Open drawer"
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h4">
        {(current?.handle as RouteHandle)?.title}
      </Typography>
    </Box>
  );
};

export default Header;
